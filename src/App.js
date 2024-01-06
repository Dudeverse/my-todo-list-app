import React, { useState } from 'react';
import Todo from './todo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text }]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, {id: Date.now(), text }]);
      setText('');
    }
  };


  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onEdit={editTodo}/>
        ))}
      </div>
    </div>
  );
};

export default App;
