import React from "react"
import {useContext} from "react"
import ThemeContext from "../../context/ThemeContext";

import DummyFour from "../DummyFour";

function DummyThree() {
  const data = useContext(ThemeContext)

   return (
    <div className="dummy">
      <p>soy el componente dummy 3</p>
      <p> Este es el valor del contexto usando el hook useContext : {data} </p>
      <DummyFour />
    </div>
  );
}

 
   


export default DummyThree;