import './App.css';
import { useState, useEffect } from "react";
import List from "../src/Components/List";
const URL = "http://localhost:3000/todo";

function App() {
  const [tasks, setTasks] = useState([]);

  function getData() {
    fetch(URL, { method: "GET" })
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
      .then(data => getData(data));
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="wrapper">
      <h1>Lista de Tarefa</h1>

      {tasks.map(task => {
        return <List task={task} />
      })}

      <button>Todos</button>
      <button>Pendentes</button>
      <button>Concluidos</button>

      <button onClick={insertTask}>Criar tarefa</button>

    </div>
  );
}

export default App;
