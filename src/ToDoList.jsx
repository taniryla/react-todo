import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

export default function ToDoList({ todos, deleteToDo, completeTodo }) {
  const toDoListItems = todos.map((t, idx) => (
    <ToDoListItem todo={t} key={idx} index={idx} deleteToDo={deleteToDo} completeTodo={completeTodo}  />
  ));
  return <ul class="ToDoList">{toDoListItems}</ul>;
}