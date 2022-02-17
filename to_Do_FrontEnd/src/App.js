import './App.css';
import { useState, useEffect } from "react";
import List from "../src/Components/List";
const URL = "http://localhost:3000/todo";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterTask, setFilterTask] = useState({ filter: false, active: false });

  function getData() {
    fetch(URL, { method: "GET", })
      .then(response => response.json())
      .then(data => setTasks(data));
  };

  function insertTask() {
    fetch(URL,
      {
        method: "POST",
        headers: { 'Content-type': "application/json" },
        body: JSON.stringify({ "tarefa": "", "active": true })
      })
      .then(response => response.json())
      .then(() => getData());
  };

  function updateTask(task) {
    fetch(`http://localhost:3000/todo/${task._id}`,
      {
        method: "PUT",
        headers: {
          'Content-type': "application/json",
          'Accept': "application/json"
        },
        body: JSON.stringify(task)
      })
      .then(response => response.json())
      .then(() => getData());
  };

  function deleteTask(task) {
    fetch(`http://localhost:3000/todo/${task._id}`,
      {
        method: "DELETE",
        headers: { 'Content-type': "application/json" },
      })
      .then(response => response.json())
      .then(() => getData());
  };

  useEffect(() => {
    getData();
  }, [])

  const taskShow = filterTask.filter ? tasks.filter(task => task.active === filterTask.active) : tasks

  return (
    <div className="wrapper">
      <div className='to-do-List'>
        <h1>Lista de Tarefa</h1>

        {taskShow.map(task => {
          return <List key={task._id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        })}

        <div className='button-row'>
        <button onClick={() => setFilterTask({ filter: false })}>Todos</button>
        <button onClick={() => setFilterTask({ filter: true, active: true })}>Pendentes</button>
        <button onClick={() => setFilterTask({ filter: true, active: false })}>Concluidos</button>
        </div>

        <div className='button-row'>
        <button onClick={insertTask}>Criar tarefa</button>
        </div>

      </div>
    </div>
  );
}

export default App;
