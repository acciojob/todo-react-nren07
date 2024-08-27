import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Todo list updated:", todo); // To track changes in the todo list
  }, [todo]); // Adding todo as a dependency

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((item, i) => i !== index);
    setTodo(updatedTodo);
  };

  const list = () => {
    return todo.map((item, index) => {
      return (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <div>{item}</div>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      );
    });
  };

  const handleClick = () => {
    if (input.trim()) {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h1>To-do List:</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Add a new todo"
      />
      <button onClick={handleClick}>Add Todo</button>
      <div>{list()}</div>
    </div>
  );
};

export default App;
