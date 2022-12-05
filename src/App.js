import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Layout from "./Layout/Layout";

const App = () => {
  const tasksState = useSelector((state) => {
    return state.tasks;
  });

  return (
    <Layout>
      <div className="App">
        <TaskForm />
        {/* <TaskList /> */}
      </div>
    </Layout>
  );
};

export default App;
