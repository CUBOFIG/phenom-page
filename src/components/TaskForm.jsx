import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlices";
import { v4 as uuid } from "uuid";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";
import Hero from "./Hero/Hero";

const TaskForm = () => {
  const [task, setTasks] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTasks({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...task, id: uuid() }));
  };

  return (
    <div>
      {/* <form onSubmit={submitTask}> */}
      {/* <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      />
      <button type="submit">save</button> */}
      <Hero />
      <div>
        <h1>sorteo</h1>
        <h1>proximamente</h1>
        <h3>no tocar</h3>
      </div>
    </div>
  );
};

export default TaskForm;
