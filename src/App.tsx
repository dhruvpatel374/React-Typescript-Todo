import { useState } from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import todo from "./components/types/todo";

function App() {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodoHandler = (title: string) => {
    const id = Math.floor(1000 + Math.random() * 9000).toString();
    setTodos([...todos, { title, isCompleted: false, id }]);
  };
  const removeTodoHandler = (id: string) => {
    const newTodo = todos.filter((todo: todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
  };
  return (
    <>
      <AddToDo OnaddTodo={addTodoHandler} />
      <ToDoList OnremoveTodo={removeTodoHandler} item={todos} />
    </>
  );
}

export default App;
