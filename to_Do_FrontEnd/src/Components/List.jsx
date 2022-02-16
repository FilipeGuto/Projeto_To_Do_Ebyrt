function List({ task }) {
  return (
  <div className="row">
    <input type="checkbox" />
    <span>{task.tarefa}</span>
    <button>Apagar</button>
  </div>
  );
};

export default List;
