import { useState, useEffect } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const [todoValue, setTodoValue] = useState("");  

  const persistsData = (newList) => {
    localStorage.setItem("todos", Jason.stringify({todos: newList}));
  };

  const handleAddTodo = todo => {
    const newTodoList = [...todoItems, todo];
    persistsData(newTodoList);
    setTodoItems(newTodoList); 
  };

  const handleDeleteTodo = index => {
    const newTodoList = todoItems.filter((todo, idx) => idx !== index);
    persistsData(newTodoList);
    setTodoItems(newTodoList);
  };

  const handleEditTodo = index => {
    const valueToBeEdited = todoItems[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };


  useEffect(() =>{
    if(!localStorage) return;

    let localTodos = localStorage.getItem('todos');

    if(localTodos) return;

    setTodoItems(JSON.parse(localTodos));
  },[]);

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todoItems={todoItems} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  );
}

export default App;
