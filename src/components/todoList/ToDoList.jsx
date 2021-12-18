import React, { Fragment } from "react";

import TodoItem from "../todoItem/ToDoItem";
import classes from "./ToDoList.module.scss";

const Todolist = ({ todos }) => {
  const unCompletedArray = todos.filter((item) => {
    return item.completed === false;
  });

  return (
    <Fragment>
      <span className={classes.total}>Total:{todos.length}</span>
      <h3>To do ({unCompletedArray.length})</h3>
      <ul>
        {unCompletedArray.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Todolist;
