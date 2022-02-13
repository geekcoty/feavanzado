

function Task(props) {
//tyle= {props.isCompleted ? {textDecoration: "none"} : {textDecoration: "line-through"}
  return (
  <>
  <li> 
  {props.name}</li> 
    </>
  );
}

export default Task
