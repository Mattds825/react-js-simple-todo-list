import React from "react";
import { TodoCard } from "./TodoCard";

export const TodoList = () => {
  const todoItems  = ["go to the gym", "buy groceries", "finish essay"];

  return (
    <div>
      <ul className="main">
        {todoItems.map((todo, index) => (
          <TodoCard key={index}>
            <p>{todo}</p>
          </TodoCard>
        ))}
      </ul>
    </div>
  );
};
