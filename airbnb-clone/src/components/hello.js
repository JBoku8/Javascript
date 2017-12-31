import React from "react";

class Hello extends React.Component {

    render(){
        // Todo
        return <div>i am {this.props.firstname} {this.props.lastname}!</div>;
    }
}

export default Hello;