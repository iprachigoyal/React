import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"dummy",
            },
        };
        // console.log("chil const");
    }
    async componentDidMount(){
        const data =await fetch ("https://api.github.com/users/iprachigoyal");
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
        
    }
    render () {
        const{name, location, avatar_url}=this.state.userInfo;
        
        // console.log("child render");
        return (
            <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
                <img  src={avatar_url} alt="" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7</h4>

        </div>
        )
    }
}
export default UserClass;