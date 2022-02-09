import Title from "./components/Title"
import Subtitle from "./components/Subtitle"
import Carousel from "./components/Carousel"
import InputMirror from "./components/InputMirror"
import Sum from "./components/Sum"
import SumFunctional from "./components/SumFuctional"
import './App.css';


// una function dentro de otra se llama closure
function App() {
  
  return (
  <>
  <SumFunctional/>
  {/*<Sum/>
  <InputMirror />
    <Title />
    <Title />
      <Subtitle/>
    <Title /> 
    <Title />
    <div className="carousel">
      <Carousel />
    </div>
  */}
  </>
  )
}

export default App;
