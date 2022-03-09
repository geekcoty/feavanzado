import React from "react"
import ThemeContext from "../../context/ThemeContext"

class DummyFour extends React.Component{
    static contextType = ThemeContext;
  render() {
     console.log(this.context);
  return (
    <div className="dummy">
      <p>soy el componente dummy 4</p>
      <p>El valor de mi contexto es {this.context}</p>
    </div>
  );
}
}
export default DummyFour;