import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Task from "./components/Tasks/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleInputValue(value) {
    setTasks([
      ...tasks,
      {
        value,
        isCompleted: false
      }
    ]);
  }

  function handleCallback(name) {
    const modifiedTasks = tasks.map((task) => {
      if (task.value == name) {
        return {
          value: task.value,
          isCompleted: !task.isCompleted
        };
      }

      return task;
    });

    setTasks(modifiedTasks);
  }

  return (
    <>
      <AddTask handleCallback={handleInputValue} />
      <Tasks handleCallback={handleCallback} tasks={tasks} />
      Tareas resultas:
      <ul>
        <li>ACA VAN</li>
      </ul>
    </>
  );
}

export default App;