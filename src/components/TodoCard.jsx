import React from "react";

export const TodoCard = (props) => {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => {
          handleEditTodo(index);
        }}>
        <i className="fa-solid fa-pen-to-square" />
        </button>
        <button
          onClick={() => {
            console.log("delete clicked");
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </li>
  );
};
