import React, {useState} from 'react'

function HookCounter2() {

    const intialCount = 0
    const [count, setCount] = useState(intialCount)
    
    const incrementFive = () => {
        for(let i = 0;i < 5; i++)
        {
            setCount(av => av + 1)
        }
    }
  return (
    <div>
        Count: {count} <br></br>
        <button onClick={() => setCount(av => av + 1)}>incrementCount</button>
        <button onClick={() => setCount(av => av - 1)}>decrementCount</button>
        <button onClick={() => setCount(intialCount)}>Reset</button>
        <button onClick={incrementFive}>+Five</button>
    </div>
  )
}

export default HookCounter2