import React from 'react'

const Greet = (props) => {
    const {name} = props
    return(
        <div>
        <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Greet