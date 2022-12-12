import { useSelector } from "react-redux";

const TaskList = () => {
  const stateTasks = useSelector((state) => state.tasks);

  return (
    <div>
      {stateTasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
