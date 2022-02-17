function List({ task, updateTask, deleteTask }) {
  return (
  <div className="row">
    <input 
    type="checkbox"
    onClick={() => { updateTask({ ...task }) }} />
    <span>{task.tarefa}</span>
    <button onClick={() => {deleteTask(task)}}>Apagar</button>
  </div>
  );
};

export default List;
