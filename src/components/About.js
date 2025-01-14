import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
        // console.log("parent constructor");
    }
    
    render(){
        // console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <User/>
               < UserClass name={"xoxo"} location={"Dehradhun"}/>
    
            </div>)
    }
}

export default About;