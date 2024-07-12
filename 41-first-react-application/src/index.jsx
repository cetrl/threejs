import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App.js'

const root = createRoot(document.querySelector('#root'))

const toto = "whoever you are"

root.render(
    <>
        <h1>
            {/* This is a way of comment */}
            Hello {'you, ' + toto}
        </h1>
        <p className='cute-paragraph'>Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Tenetur sequi iure praesentium iste laboriosam officia, molestiae aliquam fugit recusandae, amet magni itaque necessitatibus cumque blanditiis autem eaque ut at. Laborum!</p>
        <input type="checkbox" id="the-checkbox" />
        <label htmlFor="the-checkbox">That checkbox</label>
        
        <App>
            <h1>My Fancy App</h1>
            <h2>This app won't change your life</h2>
        </App>
    </>
)