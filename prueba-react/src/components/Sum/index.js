import React from "react"

class Sum extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      firsInput: "",
      secondInput:"",
      showResult: false
    }
  }

    handleChange(e) {

      const {name, value} = e.target

     this.setState({
       [name]: value
     });
    }
    
    handleClick(){
      const {firstInput,secondInput} = this.state
    this.setState ({
      showResult: parseInt(firstInput) +parseInt(secondInput)
    })

    }

  render(){
    return (
      <>
      <input name="firstInput" type="text" onChange={(e) => this.handleChange(e)} />
      <input name="secondInput" type="text" onChange={(e) => this.handleChange(e)} />
      <br/>
      <button onClick={() => this.handleClick()}> Sumar </button>
      <p>El resultado es: {this.state.showResult}</p>
      </>
    )
  }
}

export default Sum