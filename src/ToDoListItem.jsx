import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index, deleteToDo, completeTodo}) {

  return (
    <li
      className="ToDoListItem"
      style={{ 
          backgroundColor: index % 2 ? "steelblue" : "grey",
          textDecoration: todo.completed ? "line-through" : "none"
        }}>
      <div className="flex-ctr-ctr">{index + 1}</div>
      {todo.text} 
      {todo.completed ? 
        <button onClick={() => deleteToDo(todo)}>❌</button> : 
        <button onClick={() => completeTodo(todo)}>✔️</button>}
    </li>
  );
}

