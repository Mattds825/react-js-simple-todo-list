import React from "react";
import { TodoCard } from "./TodoCard";

export const TodoList = (props) => {

  const { todoItems } = props;
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
