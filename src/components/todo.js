import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, editTodo,deleteTodo}) => {
  return (
    <div className="Todo">
      <div className="text">{task}</div>
      <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={editTodo} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={deleteTodo} />
      </div>
    </div>
  );
};
