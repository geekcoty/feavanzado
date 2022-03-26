import React from "react"
import { connect } from "react-redux"
import {addCounter} from "./store"


// Para mostrar el valor del estado usamos la función mapStateToProps con el estado global como param. 
// Si o si siempre va a retornar un obj con la prop que le pasemos.
// Dsps pasamos la función mapStateToProps como param de connect


class App extends React.Component{
  // acá disparamos la action mediante un button
  handleClick() {
    const { dispatch } = this.props
    dispatch (addCounter())
  }

  render() {
  return (
    <div className="App">
      <button onClick={()=> this.handleClick()}> Sumar </button>
      <p> El valor del counter es: {this.props.counter} </p>
    </div>
  );
  }

}
  function mapStateToProps(state){
    return {
      counter: state.counter
    }
  }
export default connect(mapStateToProps)(App);
