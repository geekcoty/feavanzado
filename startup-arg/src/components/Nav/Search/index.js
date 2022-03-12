
import {Link} from "react-router-dom"

function Search(props){
  function handleChange(e) {
    props.onChange(e.target.value);
  }
  return(
    <>
    <input onChange={handleChange} type="text" placeholder="Filtrar startups" />
    <Link to="/agregar"> Agregar Startup </Link>
    </>
  )
}

export default Search