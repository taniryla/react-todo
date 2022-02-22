import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index }){
    return <li 
    className="ToDoListItem"
    style={{
        backgroundColor: index % 2 ? 'plum' : 'lavender'
    }}
    >{ todo }</li>
}
