import './App.css';
import { useState, useEffect } from "react";
import List from "../src/Components/List";
const URL = "http://localhost:3000/todo";

function App() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="wrapper">
      <h1>Lista de Tarefa</h1>

      {tasks.map(task => {
        return <List key={task._id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      })}

      <button>Todos</button>
      <button>Pendentes</button>
      <button>Concluidos</button>

      <button onClick={insertTask}>Criar tarefa</button>

    </div>
  );
}

export default App;
