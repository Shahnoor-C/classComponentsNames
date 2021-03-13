import React, { Component } from 'react';

    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: this.props.age
        };
    }
    
    render() {
        const buttonPress =()=>{
            console.log(`You clicked the button for ${this.props.firstName} `)
            alert("Yeeeeeah boooiii!!!")
            alert(`You've added the age to ${this.props.firstName}!`)
            this.setState({ageCount:this.state.ageCount+1})
        }

        
        return (
        <div>
      
           <h2>{this.props.firstName}, {this.props.lastName}</h2>
           {this.props.children}
           <p>Age:{this.state.ageCount}</p>
           <p>Hair Color:{this.props.hairColor}</p>
           <button onClick = {buttonPress}>Birthday Button for {this.props.firstName} {this.props.lastName}!</button>
        </div>

      
        
        );
    }
}
    
export default PersonCard;