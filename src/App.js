import { useState } from "react";
import "./styles.css";
import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm"

export default function App() {
  const [todos, setTodos] = useState([
    {text: "Have Fun", completed: true},
    {text: "Learn React", completed: false},
    {text: "Learn the MERN-Stack", completed: false}
  ]);
  const [showToDos, setShowToDos] = useState(true);

  function addToDo(todo) {
    setTodos([{text: todo, completed: false}, ...todos]);
  }

  function deleteToDo(todo) {
    const updatedToDos = todos.filter(t => t !== todo);
    setTodos(updatedToDos);
  }

  function completeTodo(todo) {
    const updatedToDos = todos.map((t) =>
      t === todo ? {text: t.text, completed: true} : t );
    setTodos(updatedToDos)
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowToDos(!showToDos)}>{ showToDos ? 'HIDE' : 'SHOW' }</button>
      {/* pass todos as a prop */}
      {showToDos && <ToDoList todos={todos} deleteToDo={deleteToDo} completeTodo={completeTodo} />}
      <hr />
      <NewToDoForm addToDo={addToDo}/>
    </div>
  );
}