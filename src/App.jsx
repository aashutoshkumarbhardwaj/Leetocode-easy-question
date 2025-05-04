import React, { useState, useEffect } from "react";
import './App.css';

function App () {
    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      setInterval(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(async function(res) {
                const json = await res.json();
                // json is an array directly, not json.todos
                const todosWithDescription = json.map(todo => ({
                    ...todo,
                    description: "This is a sample description"
                }));
                setTodos(todosWithDescription);
            })
            .catch((err) => {
                console.error("Error fetching todos:", err);
            });

          }, 5000); // Fetch every 5 seconds
    }, []);

    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} title={todo.title} description={todo.description} />
            ))}
        </div>
    );
}

function Todo({ title, description }) {
    return (
        <div className="todo">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default App;
