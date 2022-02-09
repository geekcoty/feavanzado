import React from "react";
//la keyword "this" permite delimitar, determinar y mantener el alcance o scope de la funcion en un class component
class ClassComponent extends React.Component {
  handleChange = (e)=> {
    console.log(e, "cambio el input ClassComponent")
  }
  render () {
    return (
      <>
      <h1> Taylor Swift is THE music industry </h1>
      <h2> Release Speak Now (TV), blondie</h2>
      <h3>please</h3>
     <input onChange={this.handleChange} />
      </>
    )
  }
}

export default ClassComponent