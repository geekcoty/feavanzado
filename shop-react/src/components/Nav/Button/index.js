import {useContext} from "react"

function Button({Label, onClick, className}) {

  return (
    <button  className={className} onClick={onClick} > {Label} </button>
  )
}

export default Button