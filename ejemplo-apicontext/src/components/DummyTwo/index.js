import React from "react"
import DummyThree from "../DummyThree"

class DummyTwo extends React.Component{
  render() {
  return (
    <div className="dummy">
      <p>soy el componente dummy 2</p>
      <DummyThree />
    </div>
  );
}
}
export default DummyTwo;