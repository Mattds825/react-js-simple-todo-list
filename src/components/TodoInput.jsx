import React, { useState } from "react";

export const TodoInput = (props) => {
  const { handleAddTodo } = props;

  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter Todo..."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};
