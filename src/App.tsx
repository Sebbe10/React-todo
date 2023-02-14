import React, { useState } from "react";
import "./App.scss";
import { Itasks } from "./models/tasks";
import { Addtask } from "./components/addtask";
import { Task } from "./components/task";
import { Header } from "./components/header";

function App() {
  const [task, setTask] = useState<Itasks[]>([]);

  const addTask = (p: Itasks) => {
    setTask([...task, p]);
  };

  const deleteTask = (i: number) => {
    let p = [...task];
    p.splice(i, 1);
    setTask(p);
  };

  const toggle = (i: number) => {
    let p = [...task];
    p[i].done = !p[i].done;
    setTask(p);
  };

  return (
    <div className="App">
      <Header />
      <Addtask includeTask={addTask} />
      <Task pTask={task} removepTask={deleteTask} toggleTodo={toggle}></Task>
    </div>
  );
}

export default App;
