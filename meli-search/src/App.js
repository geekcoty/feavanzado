import "./styles.scss"
import Navbar from "./components/Navbar"
import List from "./components/List"

function App() {
  function handleCallback(inputValue) {
    console.log(`el valor del input es ${inputValue}`)
    //hacer el filter
  }
  return (
    
    <div className="comp-container">
      <Navbar propCallback ={(inputValue => handleCallback(inputValue))} />
      <List />
    </div>
  );
}

export default App;
