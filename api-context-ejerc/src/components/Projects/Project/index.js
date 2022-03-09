function Project(props){
  const {name} =props.data

  return(
    <li>
      <p>{name}</p>
    </li>
  )
}

export default Project;