import Input from "../../components/Input"
import Button from "../../components/Button"

import {useState} from "react"
import {useNotEmpty} from "../../custom-hooks/notEmpty"
import {useLocalStorage} from "../../custom-hooks/localstorage"

function Agregar() {

  const [inputs, setInputs] =useState({})
  const requiredFields = ["name", "logo","web"]

  const errors = useNotEmpty(inputs, requiredFields)

  const [getter, handleSave] = useLocalStorage();

  function handleInputs(e){
    const {value,name } = e.target;
    const newInputs = {
      ...inputs,
      [name]:value
    }
    setInputs(newInputs)

    //setInputs(...inputs, [name]:value)
  }

  function handleStartup(){

    if (errors.length == 0) {
      console.log("todo joya")
      handleSave(inputs);
    } else {
      console.log(`te faltó algo en ${errors}`)
    }
  
  }

  return(
    <>
    <Input label="name" name="name" onChange={handleInputs}/>
    
    <Input label="logo" name="logo" onChange={handleInputs}/>

    <Input label="web" name="web" onChange={handleInputs}/>

    <Input label="twitter" name="twitter" onChange={handleInputs}/>
  
    <Input label="ig" name="ig" onChange={handleInputs}/>

    <Button label="agregar startup" onClick={handleStartup} />
    </>
    
  )
}

export default Agregar