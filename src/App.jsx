import React, { Fragment } from 'react';
import { useState } from 'react';
let counter = 0;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: Math.random(),
      completed: Math.random(),
    },
    {
      id: 2,
      title: Math.random(),
      completed: Math.random()
    },
    {
      id: 4,
      title: Math.random(),
      completed: Math.random(),
    },
  ]);

  function addTodo() {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: counter++, // Ensure unique ID
        title: Math.random(),
        description: Math.random()
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;

