import "./styles.scss"
import Navbar from "./components/Navbar"
import List from "./components/List"

import {useState} from "react"

function App() {
  const [searchParam, setSearchParam] = useState("");

  function handleCallback(searchParam) {
    //console.log(`el valor del input es ${searchParam}`)
    setSearchParam(searchParam);
  }
  return (
    
    <div className="comp-container">
      <Navbar propCallback ={handleCallback} />
      <List searchParam={searchParam} />
    </div>
  );
}

export default App;
