import React from "react"

class InputMirror extends React.Component {
  // estado interno: inicialización
  constructor(props) {
    super(props);
    this.state = {
      firstInput: "",
      secondInput: "",
      showValues: false
    };
  }
   // estado interno: actualización
   handleFirstInput(e) {
     this.setState({
       firstInput: e.target.value
     });
    }
       handleSecondInput(e) {
     this.setState({
       secondInput: e.target.value
     });

  }
  handleClick (){
    this.setState({
    showValues: true
    })
  }
  render () {
    //estador interno:lectura
    return (
      <div>
      <input type="text" onChange={(e) => this.handleFirstInput(e)}/>
      <input type="text" onChange={(e) => this.handleSecondInput(e)}/>
      <br/>
     <button onClick={() => this.handleClick()}> Copiar</button>
     <br/>
     {this.state.showValues && (
       <>
     <p> {this.state.firstInput}</p>
     <p> {this.state.secondInput}</p>
     </>
     )}
      </div>
    )

  }
}

export default InputMirror