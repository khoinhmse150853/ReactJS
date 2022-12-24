import React, { useState } from "react";

function TodoList() {
  const [currentInput, setCurrentInput] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const storageTodoList = localStorage.getItem("todoList");
    return JSON.parse(storageTodoList) ?? [];
  });

  const handleAdd = () => {
    if (currentInput !== "") {
      setTodoList(() => {
        const newTodoList = [...todoList, currentInput];

        const jsonTodoList = JSON.stringify(newTodoList);

        localStorage.setItem("todoList", jsonTodoList);

        return newTodoList;
      });
      setCurrentInput("");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setCurrentInput(e.target.value)}
        value={currentInput}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
