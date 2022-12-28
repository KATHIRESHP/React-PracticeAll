import React, {Component} from "react";

class Welcome extends Component
{
    render(){
        const {name} = this.props
        return (
            <div>
            <h1>Welcome to {name}</h1>
            </div>
        );
    }
}
export default Welcome