import { useEffect, useState } from 'react'

export default function Clicker({ keyName, color })
{
    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))

    useEffect(() => 
    {
        console.log('first render');

        return () =>
            {
                localStorage.removeItem(keyName)
            }
    }, [])

    useEffect(() =>
    {
        localStorage.setItem(keyName, count)
    }, [ count ])

    const buttonClick = () =>
        {
            setCount(count + 1)
        }

    return <div>
        <div style={ { color: color } }>Clicks count: { count }</div>
        <button onClick={buttonClick}>Click me</button>
    </div>
}