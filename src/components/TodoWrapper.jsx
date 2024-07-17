// src/components/TodoWrapper.jsx
import React, { useEffect, useState } from 'react';
import { Todo } from './todo';
import { getAllToDo, addTodo, editTodo, deleteTodo } from '../utilities/Handle';

const TodoWrapper = ({ email, userId }) => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    const [todoId, setTodoId] = useState("");

    useEffect(() => {
        getAllToDo(userId, setTodos); // Fetch todos specific to the user
    }, [userId]);

    const handleEdit = (id, text) => {
        setValue(text);
        setTodoId(id);
        setIsUpdate(true);
    };

    const handleDelete = async (id) => {
        await deleteTodo(userId, id, email, setTodos);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isUpdate) {
            await editTodo(userId, todoId, email, value, setTodos, setValue, setIsUpdate);
        } else {
            await addTodo(userId, value, email, setValue, setTodos);
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
                    style={{color:'black'}}
                />
                <button type="submit" className='todo-btn'>{isUpdate ? "Update" : "Add Task"}</button>
            </form>
            {todos.map((item) => (
                <Todo
                    key={item._id}
                    task={item.text}
                    editTodo={() => handleEdit(item._id, item.text)}
                    deleteTodo={() => handleDelete(item._id)}
                />
            ))}
        </div>
    );
};

export default TodoWrapper; // Correctly export TodoWrapper
