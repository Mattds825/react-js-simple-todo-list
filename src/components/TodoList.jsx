import React from "react";
import { TodoCard } from "./TodoCard";

export const TodoList = (props) => {

  const { todoItems, handleDeleteTodo } = props;
  return (
    <div>
      <ul className="main">
        {todoItems.map((todo, index) => (
          <TodoCard key={index} {...props} index={index}>
            <p>{todo}</p>
          </TodoCard>
        ))}
      </ul>
    </div>
  );
};
