import { Component } from "react";


/*const PersonCard =(props)=>{
return(
    <>
    <h2>{props.nombre}</h2>
    <p> Age:</p>
    <p>Hair Color: </p>
    </>
);
}*/

class PersonCard extends Component{
 constructor(props){
    super(props);
 }
 render = ()=>{
    return(
        <>
        <h2>{this.props.nombre}, {this.props.apellido}</h2>
        <p> Age:{this.props.edad}</p>
        <p>Hair Color:{this.props.hairColor}</p>
        </>
    )}
 }

export default PersonCard