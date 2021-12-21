import { useState, useEffect } from "react";
import { Context } from "./context/context";
import ToDoService from "./API/ToDoService";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Input from "./components/UI/Input";
import TodoList from "./components/todoList/ToDoList";
import CompletedList from "./components/competedList/CompletedList";
import Button from "./components/UI/Button";
import axios from "axios";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setToDoTitle] = useState("");
  const [todosIsloading, setTodosIsLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setTodosIsLoading(true);
    const getTodos = await ToDoService.getAll();
    setTodos(getTodos);
    setTodosIsLoading(false);
  };

  const postToDo = async (e) => {
    e.preventDefault();
    if (todoTitle.length !== 0) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          {
            userId: Date.now(),
            title: todoTitle,
            completed: false,
          }
        );
        console.log(response.data);
        setTodos([response.data, ...todos]);
      } catch (error) {
        console.log(error);
      }

      setToDoTitle("");
    }
  };

  const removeToDo = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const editToDo = async (title, id) => {
    removeToDo(id);
    setToDoTitle(title);
  };

  const toggleToDo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider value={{ toggleToDo, removeToDo, editToDo }}>
      <div>
        <Navbar />
        <Sidebar />
        <div className="main-wrapper">
          <div className="main-content">
            <div className="main-content-left">
              <form className="form" onSubmit={postToDo}>
                <Input
                  type="text"
                  value={todoTitle}
                  placeholder="+ Add a task, press Enter to save"
                  onChange={(e) => setToDoTitle(e.target.value)}
                />
                <Button>Add</Button>
              </form>
              {todosIsloading ? (
                <h1>загрузка...</h1>
              ) : (
                <TodoList todos={todos} />
              )}
            </div>
            <div className="main-content-right">
              <CompletedList todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
