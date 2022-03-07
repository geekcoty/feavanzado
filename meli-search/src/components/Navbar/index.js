import {useState} from "react"


function Navbar(props) {
  const [inputValue, setInputValue] = useState ("")

  function handleChange(e) {
    const {value} = e.target;
    setInputValue(value);
    props.propCallback(inputValue)
  }
  return (
    <>
    <input type="text" 
    onChange={handleChange}
        value={inputValue} />
    </>
  );
}

export default Navbar;
