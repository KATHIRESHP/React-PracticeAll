import React, {useReducer} from 'react'

//useReducer is used combine useState hook and do the operations using the function
let changer =(state, action) =>{
    switch(action.type)
    {
        case "increment":
            return {count: state.count + 1, text :state.text}
        case "magic":
            return { count: state.count, text: !state.text}
        default:
            return state
    }
}
function UseReducer() {

    let [state, change] = useReducer(
        changer, 
        {count: 0, text: true}
        )
  return (
    <div>
        <h1>{state.count}</h1>
        <button
            onClick={() => {
                change({type: "increment"});
            }}
        >
            Click to increment
        </button>
        <div></div>
        {state.text &&<h1>Kathir</h1>}
        <button onClick={()=>
        {
            change({type: "magic"});
        }
        }> Click to toggle</button>
    </div>
  )
}

export default UseReducer