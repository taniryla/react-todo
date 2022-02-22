import ToDoListItem from "./ToDoListItem"
import './ToDoList.css';

export default function ToDoList({ todos }){
    const toDoListItems = todos.map((t, idx) => <ToDoListItem index={idx} todo={t} key={idx} />)
    return (
        <ul className="ToDoList">
            {toDoListItems}
        </ul>
    );
}