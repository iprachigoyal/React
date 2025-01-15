import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="text-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <User/>
               < UserClass name={"xoxo"} location={"Dehradhun"}/>
    
            </div>)
    }
}

export default About;