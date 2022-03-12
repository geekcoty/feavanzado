import {Link} from "react-router-dom"
function Item(props){
const { data } = props;

  return (
    <Link to={`/${data.name}`}>
      <div>
        <img src={data.logo} alt="startup logo"/> 
        <p>Nombre: {data.name}</p>
        <p>Descripcion: {data.description}</p>
      </div>
    </Link>
  );
}

export default Item