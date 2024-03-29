import { useState } from "react";

function List({ task, updateTask, deleteTask }) {
  const [text, setText] = useState("");

  return (
    <div className="row">
      <input
        type="checkbox"
        checked={!task.active}
        onClick={() => {
          updateTask({ ...task, active: !task.active });
        }}
      />
      {task.edit || task.tarefa === "" ? (
        <input
          type="text"
          placeholder={task.tarefa}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      ) : (
        <span
          onClick={() => {
            updateTask({ ...task, edit: true });
          }}
          style={task.active ? {} : { textDecoration: "line-through" }}
        >
          {task.tarefa}
        </span>
      )}
      <button
        onClick={() => {
          updateTask({ ...task, tarefa: text, edit: false});
        }}
      >
        OK
      </button>
      <button
        onClick={() => {
          deleteTask(task);
        }}
      >
        Apagar
      </button>
    </div>
  );
}

export default List;
