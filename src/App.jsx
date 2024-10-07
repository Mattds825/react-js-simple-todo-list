import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = todo => {
    setTodoItems([...todoItems, todo]);
  };

  const handleDeleteTodo = index => {
    const newTodoList = todoItems.filter((todo, idx) => idx !== index);

    setTodoItems(newTodoList);
  };

  const handleEditTodo = (index, newTodo) => {};

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todoItems={todoItems} handleDeleteTodo={handleDeleteTodo}/>
    </>
  );
}

export default App;
