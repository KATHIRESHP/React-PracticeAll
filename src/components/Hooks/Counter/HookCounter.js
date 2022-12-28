import React, {useState} from 'react'

function HookCounter() {
    let [value, setValue] = useState("Kathir")
    let onChange = (event) =>
    {
      setValue(event.target.value)
    }
  return (
    <div>
     <input placeholder='enter the name to change...' onChange={onChange}/>
     <div>Name : {value}</div>
    </div>
  )
}

export default HookCounter