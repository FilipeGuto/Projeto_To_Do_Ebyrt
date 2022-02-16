import './App.css';
import { useState, useEffect } from "react";
import List from "../src/Components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  function getData() {
    fetch('http://localhost:3000/todo', {method: "GET"})
    .then(response => response.json())
    .then(data => setTasks(data));
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <div className="wrapper">
      <h1>Lista de Tarefa</h1>

      {tasks.map(task => {
        return <List task={task} />
      })}

      <button>Todos</button>
      <button>Pendentes</button>
      <button>Concluidos</button>

      <button>Criar tarefa</button>

    </div>
  );
}

export default App;
