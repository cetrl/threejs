import { useState } from 'react'
import Clicker from './Clicker.js'

export default function App({ children })
{
    const [ hasClicker, setHasClicker ] = useState(true)
    const toggleClickerClick = () =>{
        setHasClicker(!hasClicker)
    }

    console.log(`hsl(${Math.random()*360}deg, 100%, 70%)`);

    return <>
    { children }
    <div>Total count: { count }</div>
        <button onClick={ toggleClickerClick }>
            { hasClicker ? 'Hide' : 'Show'}</button>
        { hasClicker && <>
            <Clicker keyName = "countA" color={`hsl(${Math.random()*360}deg, 100%, 40%)`}/>
            <Clicker keyName = "countB" color={`hsl(${Math.random()*360}deg, 100%, 40%)`}/>
            <Clicker keyName = "countC" color={`hsl(${Math.random()*360}deg, 100%, 40%)`}/>
        </> }
    </>
}