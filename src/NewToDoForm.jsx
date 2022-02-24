import { useState } from "react";
export default function NewToDoForm({addToDo}) {
  const [newToDo, setNewToDo] = useState('');
  
  function handleAddToDo (evt) {
    evt.preventDefault()
    addToDo(newToDo);
    setNewToDo('')
  }
  
  return (
    <>
    <h2>NewToDoForm</h2>
    <form onSubmit={handleAddToDo}>
      <input 
        value={newToDo} 
        onChange={(evt) => setNewToDo(evt.target.value)}
        placeholder="New To-Do"
        required
        pattern=".{4,}"
      />
      <button type="submit">Add To-Do</button>
    </form>
    </>
  );

}