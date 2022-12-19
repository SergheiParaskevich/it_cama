import React from "react";
 import { filterType } from "../../App";

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodolistPropsType = {
  removeTask: (id:number)=>void
  tasks: Array<TaskType>;
  taskFiltered:(filterValue:filterType)=>void
};

export default function Todolist(props: TodolistPropsType) {
  return (
    <div>
      <h3>What to learn</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((elem) => (
          <li key={elem.id}>
            <input type="checkbox" checked={elem.isDone} />
            <span>{elem.title}</span>
            <button onClick={()=>{props.removeTask(elem.id)}}>-</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={()=>{props.taskFiltered('All')}}>All</button>
        <button onClick={()=>{props.taskFiltered('Active')}}>Active</button>
        <button onClick={()=>{props.taskFiltered('Complited')}}>Complited</button>
      </div>
    </div>
  );
}
