import React, { Fragment } from "react";

import TodoItem from "../todoItem/ToDoItem";
import classes from "./ToDoList.module.scss";

const Todolist = ({ todos }) => {
  return (
    <Fragment>
      <button className={classes.total}>Total:0</button>
      <h3>To do (0)</h3>
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Todolist;
