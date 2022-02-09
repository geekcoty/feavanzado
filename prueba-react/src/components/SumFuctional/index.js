import {useState} from "react"

function SumFunctional () {

  {/*const [count,setCount] = useState(0)

  function handleSuma() {
    setCount((prev) =>prev +1)
  }

  function handleResta() {
    setCount((prev) =>prev -1)
  }

{/* <button onClick={handleSuma}> sumar </button>
    <button onClick={handleResta}> restar </button>*/}

  const [first, setFirst] = useState(0)  
  const [second, setSecond] = useState(0)
  const [result, setResult] = useState(0)
  const [mockArray, setMockArray] =useState(["Juani", "Courseit"])

 function handleClick(){
  setResult(parseInt(first) + parseInt(second))
  }

  return (
    <>
  <input name="firstInput" type="text" onChange={(e) => setFirst(e.target.value)} />
  <input name="secondInput" type="text" onChange={(e) => setSecond(e.target.value)} />
<br/>
  <button onClick={handleClick}> sumar </button>
  
    <br/>
  El Contador está en : {result}

{/*usando un .map*/}
<ul>
{mockArray.map((val,key) =>{
  return <li key={key}>{val}</li>
})}
</ul>


    </>

  )
}

export default SumFunctional