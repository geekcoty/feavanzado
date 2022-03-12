import {Link} from "react-router-dom"
import {useState} from "react"
import {useLocalStorage} from "../../custom-hooks/localstorage"

//práctica LocalStorage

function Home() {

  const [inputValue, setInputValue] = useState("")
  const [localStorageValue, setLocalStorageValue] = useState ("")
  const [getter] = useLocalStorage();


  function save(){
    localStorage.setItem("inputValue", inputValue)
  }
  function read(){
   const lsval = localStorage.getItem("inputValue")
   setLocalStorageValue(lsval)

  }
  function clean(){
    localStorage.clear()
  }

  console.log(getter)
  return(
    <>

    {getter.map((startup,key) => {
      return (<div key={key}>
        <p>{startup.name}</p>
      </div> )
    })}
  <Link to="/agregar"> Agregar Startup</Link>

  <input onChange={(e) => setInputValue(e.target.value)} type="text"/>

  <button onClick={save}> Guardar </button>
  <button onClick={read}> Leer </button>
  <button onClick={clean}> Borrar </button>
  <p> El valor de localStorage es: {localStorageValue} </p>
  </>
  )
}

export default Home