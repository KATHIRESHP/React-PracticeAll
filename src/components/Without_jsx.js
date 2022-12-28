import React from "react";

const Without_jsx = () =>{
    return React.createElement(
        'div',
        {id : 'jsxless'},
        React.createElement(
            'h3',
            null,
            'from Tiruppur, Tamil Nadu'            
        ) )
}

export const With_jsx = () =>{
    return(
        <div id="withjsx">
        <h3>India</h3>
        </div>
    )
}
export default Without_jsx