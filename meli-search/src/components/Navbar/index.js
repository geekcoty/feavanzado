function Navbar(props) {
  function handleChange(e) {
    const {value} = e.target;
    const {propCallback} =props;
    
    propCallback(value)
   
  }
  return (
    <>
    <input type="text" 
    onChange={handleChange}
  />
    </>
  );
}

export default Navbar;
