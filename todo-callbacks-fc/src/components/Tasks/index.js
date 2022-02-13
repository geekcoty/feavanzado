import Task from "../Tasks/Task"

function Tasks(props) {
  const {propTasks} = props

  return (
    <ul className="task-list">

     {propTasks.map((task,key) => {
      return <Task key={key} name={task} />
    })}
    </ul>
  );
}

export default Tasks
