import Navbar from "../../components/Navbar"
import Content from "../../components/Content"

import {useState} from "react"

import "./searchStyle.scss"
function Search() {
  const [searchParam, setSearchParam] = useState("");
   function handleCallback(searchParam) {
    //console.log(`el valor del input es ${searchParam}`)
    setSearchParam(searchParam);
  }
  return (
    <div className="search-container">
      <Navbar propCallback={handleCallback}/>
      <Content searchParam={searchParam} />
    </div>
  );
}

export default Search;