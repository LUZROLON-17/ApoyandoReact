import { Component } from "react";
import PersonCard from "./PersonCard/PersonCard"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persona: [{
        nombre: "Done",
        apellido: "Jane",
        edad: 45,
        hairColor: "Black"
      },
      {
        nombre: "John",
        apellido: "Smitch",
        edad: 88,
        hairColor: "Brown"
      },
      {
        nombre: "Fillmare",
        apellido: "Millard",
        edad:19,
        hairColor: "Brown"
      },{
        nombre: "María",
        apellido: "Smitch",
        edad: 45,
        hairColor: "Yellow"
      }]
    }
  }
  render = () => {
    return (
      <>
        {this.state.persona.map((persona) => {
          return (<PersonCard  key={persona.id}
            nombre={persona.nombre}
            apellido={persona.apellido}
            edad={persona.edad}
            hairColor={persona.hairColor}/>)
        })}
      </>
    )
  }
}
export default App