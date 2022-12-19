import React, { useState } from "react";
import "./App.css";
import Todolist from "./components/Todolist";


export type filterType = 'All' | 'Active' | 'Complited';

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ]);

  let [filteredTasks, setFilderedTasks] = useState<filterType>('All');

  function removeTask(id: number) {
    setTasks(tasks.filter((elem) => elem.id !== id));
  }

  const taskFiltered = (filterValue: filterType) => {
    setFilderedTasks(filterValue);
  };
  let durshlag = tasks;
  if (filteredTasks === "Active") {
    durshlag=tasks.filter((elem) => elem.isDone === false);
  }
  if (filteredTasks === "Complited") {
    durshlag=tasks.filter((elem) => elem.isDone);
  }

  // durshlag = tasks.filter((elem) => elem);

  return (
    <div className="App">
      <Todolist
        taskFiltered={taskFiltered}
        tasks={durshlag}
        removeTask={removeTask}
       
      />
    </div>
  );
}

export default App;
