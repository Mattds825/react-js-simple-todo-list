import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = todo => {
    setTodoItems([...todoItems, todo]);
  };

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todoItems={todoItems} />
    </>
  );
}

export default App;
