import React, { Fragment } from "react";

import TodoItem from "../todoItem/ToDoItem";
import classes from "./ToDoList.module.scss";

const Todolist = ({ todos }) => {
  const completedTodo = { completed: false };

  const completedArray = todos.filter((item) => {
    return item.completed === completedTodo.completed;
  });

  return (
    <Fragment>
      <span className={classes.total}>Total:{todos.length}</span>
      <h3>To do ({completedArray.length})</h3>
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Todolist;
