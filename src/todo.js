import React from 'react';

const Todo = ({ todo, onDelete }) => {
    return (
    <div>
        {todo.text}
        <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
    );
};

const TodoEdit = ({todo, onEdit}) => {
    return (
    <div>
        {todo.text}
        <button onClick={() => onEdit(todo.id)}>Edit</button>
    </div>
    );
};

export default Todo;
