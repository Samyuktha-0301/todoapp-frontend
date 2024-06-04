import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo';
import { getAllToDo, addTodo ,editTodo,deleteTodo} from '../utilities/Handle';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');
    const [isUpdate,setIsUpdate]=useState(false);
    const [todoid,setTodoid]=useState("");
    useEffect(() => {
        getAllToDo(setTodos);
    }, []);

   
    const handleEdit = (id, text) => {
        setValue(text);
        setTodoid(id);
        setIsUpdate(true);
    };
    const handleDelete = async (id) => {
        await deleteTodo(id, setTodos);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault();
        if (isUpdate) {
            await editTodo(todoid, value, setTodos, setValue, setIsUpdate);
        } else {
            await addTodo(value, setValue, setTodos);
        }
    };

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="todo-input"
                    placeholder='What is the task today?'
                />
                <button type="submit" className='todo-btn'>{isUpdate?"Update":"Add Task"}</button>
            </form>
            {todos.map((item) => (
                <Todo
                    key={item._id}
                    task={item.text}
                    // toggleComplete={toggleComplete}
                    
                    editTodo={() => handleEdit(item._id, item.text)}
                    deleteTodo={()=>handleDelete(item._id)}
                />
            ))}
        </div>
    );
};
