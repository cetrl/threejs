import * as THREE from "three";
import { LOD } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { ParallaxBarrierEffect } from "three/addons/effects/ParallaxBarrierEffect.js";
import { SUBTRACTION, Evaluator, Brush } from "three-bvh-csg";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import GUI from "lil-gui";
import terrainVertexShader from "./shaders/terrain/vertex.glsl";
import terrainFragmentShader from "./shaders/terrain/fragment.glsl";

/**
 * Base
 */
// Debug
const gui = new GUI({ width: 325 });
const debugObject = {};

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Loaders
const rgbeLoader = new RGBELoader();

/**
 * Environment map
 */
rgbeLoader.load("/shanghai_bund_2k.hdr", (environmentMap) => {
  environmentMap.mapping = THREE.EquirectangularReflectionMapping;
  // Adjust the environment intensity (default is 1)
  scene.environmentIntensity = 0; // 0.5 for half strength, 2 for double strength, etc.
  scene.environment = environmentMap;
});

/**
 * Terrain
 */
// geometry
const geometry = new THREE.PlaneGeometry(10, 10, 500, 500);
geometry.deleteAttribute("uv");
geometry.deleteAttribute("normal");
geometry.rotateX(-Math.PI * 0.5);

//material
debugObject.colorWaterDeep = "#002b3d";
debugObject.colorWaterSurface = "#00e67a";
debugObject.colorSand = "#0099b8";
debugObject.colorGrass = "#7370ff";
debugObject.colorSnow = "#d14900";
debugObject.colorRock = "#0a74ff";

const uniforms = {
  uColorWaterDeep: new THREE.Uniform(
    new THREE.Color(debugObject.colorWaterDeep)
  ),
  uColorWaterSurface: new THREE.Uniform(
    new THREE.Color(debugObject.colorWaterSurface)
  ),
  uColorSand: new THREE.Uniform(new THREE.Color(debugObject.colorSand)),
  uColorGrass: new THREE.Uniform(new THREE.Color(debugObject.colorGrass)),
  uColorSnow: new THREE.Uniform(new THREE.Color(debugObject.colorSnow)),
  uColorRock: new THREE.Uniform(new THREE.Color(debugObject.colorRock)),
  uTime: new THREE.Uniform(0),
  uPositionFrequency: new THREE.Uniform(0.25),
  uStrength: new THREE.Uniform(1.9),
  uWarpFrequency: new THREE.Uniform(3.5),
  uWarpStrength: new THREE.Uniform(0.8),
};

gui
  .add(uniforms.uPositionFrequency, "value", 0, 1, 0.001)
  .name("uPositionFrequency");
gui.add(uniforms.uStrength, "value", 0, 10, 0.001).name("uStrength");
gui.add(uniforms.uWarpFrequency, "value", 0, 10, 0.001).name("uWarpFrequency");
gui.add(uniforms.uWarpStrength, "value", 0, 1, 0.001).name("uWarpStrength");

gui
  .addColor(debugObject, "colorWaterDeep")
  .onChange(() =>
    uniforms.uColorWaterDeep.value.set(debugObject.colorWaterDeep)
  );
gui
  .addColor(debugObject, "colorWaterSurface")
  .onChange(() =>
    uniforms.uColorWaterSurface.value.set(debugObject.colorWaterSurface)
  );
gui
  .addColor(debugObject, "colorSand")
  .onChange(() => uniforms.uColorSand.value.set(debugObject.colorSand));
gui
  .addColor(debugObject, "colorGrass")
  .onChange(() => uniforms.uColorGrass.value.set(debugObject.colorGrass));
gui
  .addColor(debugObject, "colorSnow")
  .onChange(() => uniforms.uColorSnow.value.set(debugObject.colorSnow));
gui
  .addColor(debugObject, "colorRock")
  .onChange(() => uniforms.uColorRock.value.set(debugObject.colorRock));

const material = new CustomShaderMaterial({
  //CSM
  baseMaterial: THREE.MeshStandardMaterial,
  vertexShader: terrainVertexShader,
  fragmentShader: terrainFragmentShader,
  uniforms: uniforms,
  silent: true,

  //Mesh Standard Material
  metalness: 0.3,
  roughness: 0.3,
  color: "#85d5c4",
});

const depthMaterial = new CustomShaderMaterial({
  //CSM
  baseMaterial: THREE.MeshDepthMaterial,
  vertexShader: terrainVertexShader,
  uniforms: uniforms,
  silent: true,

  //MeshDepthMaterial
  depthPacking: THREE.RGBADepthPacking,
});

// const terrain = new THREE.Mesh(geometry, material);
// terrain.customDepthMaterial = depthMaterial;
// terrain.receiveShadow = true;
// terrain.castShadow = true;
// scene.add(terrain);

/**
 * Terrain with LOD
 */
const terrainLOD = new LOD();

const createTerrainGeometry = (resolution) => {
  const geometry = new THREE.PlaneGeometry(10, 10, resolution, resolution);
  geometry.deleteAttribute("uv");
  geometry.deleteAttribute("normal");
  geometry.rotateX(-Math.PI * 0.5);
  return geometry;
};

// High detail terrain
const highDetailTerrain = new THREE.Mesh(createTerrainGeometry(500), material);
highDetailTerrain.customDepthMaterial = depthMaterial;
highDetailTerrain.receiveShadow = true;
highDetailTerrain.castShadow = true;

// Medium detail terrain
const mediumDetailTerrain = new THREE.Mesh(
  createTerrainGeometry(250),
  material
);
mediumDetailTerrain.customDepthMaterial = depthMaterial;
mediumDetailTerrain.receiveShadow = true;
mediumDetailTerrain.castShadow = true;

// Low detail terrain
const lowDetailTerrain = new THREE.Mesh(createTerrainGeometry(100), material);
lowDetailTerrain.customDepthMaterial = depthMaterial;
lowDetailTerrain.receiveShadow = true;
lowDetailTerrain.castShadow = true;

// Add levels to LOD
terrainLOD.addLevel(highDetailTerrain, 0); // Use high detail when camera is close
terrainLOD.addLevel(mediumDetailTerrain, 20); // Switch to medium detail at 20 units away
terrainLOD.addLevel(lowDetailTerrain, 40); // Switch to low detail at 40 units away

// Add the LOD object to the scene instead of a single terrain mesh
scene.add(terrainLOD);

/**
 * Water
 */
const water = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10, 1, 1),
  new THREE.MeshPhysicalMaterial({
    transmission: 1,
    roughness: 0.15,
  })
);
water.rotation.x = -Math.PI * 0.5;
water.position.y = -0.1;
scene.add(water);

/**
 * Board

//brushes
const boardFill = new Brush(new THREE.BoxGeometry(11, 2, 11));
const boardHole = new Brush(new THREE.BoxGeometry(10, 2.1, 10));
// move brushes
// boardHole.position.y = 0.1
// boardHole.updateMatrixWorld()

//evaluate
const evaluator = new Evaluator();
const board = evaluator.evaluate(boardFill, boardHole, SUBTRACTION);
board.geometry.clearGroups();
board.material = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 0,
    roughness: 0.3,
});
scene.add(board);
*/

/**
 * Spheres
 */

const spheres = [];
const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 8);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff, // Base color (you can adjust this)
  metalness: 1, // High metalness for more reflective appearance
  roughness: 0.1, // Low roughness for sharper reflections
  envMap: scene.environment,
  envMapIntensity: 1, // Adjust this value to control reflection intensity
});

// Create frustum and matrix outside the loop
const frustum = new THREE.Frustum();
const cameraViewProjectionMatrix = new THREE.Matrix4();

// Create spheres
for (let i = 0; i < 50; i++) {
  const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

  mesh.position.x = Math.random() * 10 - 5;
  mesh.position.y = Math.random() * 10 - 5;
  mesh.position.z = Math.random() * 10 - 5;

  mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

  scene.add(mesh);
  spheres.push(mesh);
}

/**
 * Lights
 */

const pointLight1 = new THREE.PointLight(0xffffff, 50, 100, 3);
pointLight1.position.set(0, 4, 0);
pointLight1.castShadow = false;

const pointLight2 = new THREE.PointLight(0xffccff, 5, 20, 2);
pointLight2.position.set(2, 2, 3);
pointLight2.castShadow = false;

const pointLight3 = new THREE.PointLight(0xff5500, 5, 20, 2);
pointLight3.position.set(-2, 2, -3);
pointLight3.castShadow = false;

const sphereSize = 1;
const pointLightHelper1 = new THREE.PointLightHelper(pointLight1, sphereSize);
scene.add(pointLight1, pointLight2, pointLight3);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(sizes.pixelRatio);

  // Update effect
  effect.setSize(sizes.width, sizes.height);
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(-10, 6, -2);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(sizes.pixelRatio);

const effect = new ParallaxBarrierEffect(renderer);
effect.setSize(sizes.width, sizes.height);

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  const timer = 0.0001 * Date.now();

  for (let i = 0, il = spheres.length; i < il; i++) {
    const sphere = spheres[i];
    sphere.position.x = 5 * Math.cos(timer + i);
    sphere.position.y = 5 * Math.sin(timer + i * 1.1);
  }

  // Update LOD
  terrainLOD.update(camera);

  // Update frustum
  camera.updateMatrixWorld();
  camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
  cameraViewProjectionMatrix.multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);

  // Check visibility for each sphere
  spheres.forEach((sphere) => {
    sphere.visible = frustum.intersectsObject(sphere);
  });

  //uniforms
  uniforms.uTime.value = elapsedTime;

  // Update controls
  controls.update();

  // Render
  effect.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
