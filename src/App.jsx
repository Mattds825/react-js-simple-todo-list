import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const [todoValue, setTodoValue] = useState("");  

  const handleAddTodo = todo => {
    setTodoItems([...todoItems, todo]);
  };

  const handleDeleteTodo = index => {
    const newTodoList = todoItems.filter((todo, idx) => idx !== index);

    setTodoItems(newTodoList);
  };

  const handleEditTodo = index => {
    const valueToBeEdited = todoItems[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todoItems={todoItems} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  );
}

export default App;
