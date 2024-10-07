import React from "react";

export const TodoCard = (props) => {
  const {children} = props; 
  return (
    <li className="todoItem">
      {children}  
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square" />
        <i className="fa-regular fa-trash-can" />
      </div>
    </li>
  );
};
