import React from "react"
import DummyFour from "../DummyFour";


class DummyThree extends React.Component{

  render() {
   
  return (
    <div className="dummy">
      <p>soy el componente dummy 3</p>
      <DummyFour />
    </div>
  );
}
}
export default DummyThree;