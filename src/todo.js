import React from 'react';

const Todo = ({ todo, onDelete }) => {
    return (
    <div>
        {todo.text}
        <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
    );
};

export default Todo;
