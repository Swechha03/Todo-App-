import { useState } from 'react'
import './InputTodo.css'

//creates the input and add bar 
export function InputTodo({ addTodo }) {
    const [todo, setTodo] = useState('');

    //gets the value from the input and stores in todo 
    function getTodo(event) {
        setTodo(event.target.value);
    }

    //handles all the function of the add button 
    function handleAddButton() {
        if (todo !== '') {
            addTodo(todo);
            setTodo('');
        }

    }

    return (
        <div>
            <input type="text" placeholder="Enter your todo" onChange={getTodo} value={todo}></input>
            <button onClick={handleAddButton}>Add To List</button>
        </div>
    )
}
