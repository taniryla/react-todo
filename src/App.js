import logo from './logo.svg';
import './App.css';
import "./styles.css";
import ToDoList from './ToDoList';

const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN-Stack'
];


function App() {
  return (
    <div className="App">
      <div>React To-Do</div> 
      <ToDoList todos={todos}/>      
    </div>
  );
}

export default App;
