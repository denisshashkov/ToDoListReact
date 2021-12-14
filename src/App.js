import { Fragment, useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Input from "./components/UI/Input";
import TodoList from "./components/todoList/ToDoList";
import Button from "./components/UI/Button";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setToDoTitle] = useState("");
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );

      const responseData = await response.json();
      const loadedTodos = [];
      for (const key in responseData) {
        loadedTodos.push({
          id: key,
          title: responseData[key].title,
          complete: responseData[key].complete,
        });
      }
      setTodos(loadedTodos);
    };

    fetchTodos().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className="fetchTodoError">
        <p>{httpError}</p>
      </section>
    );
  }

  const addToDo = (e) => {
    e.preventDefault();
    if (todoTitle.length !== 0) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setToDoTitle("");
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className="main-wrapper">
        <Sidebar />
        <div className="main-content">
          <form className="form" onSubmit={addToDo}>
            <Input
              type="text"
              placeholder="+ Add a task, press Enter to save"
              value={todoTitle}
              onChange={(e) => setToDoTitle(e.target.value)}
            />
            <Button>Add</Button>
          </form>
          <TodoList todos={todos} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
