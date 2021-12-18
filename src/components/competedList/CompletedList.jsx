import React, { Fragment } from "react";
import TodoItem from "../todoItem/ToDoItem";
import classes from "./CompletedList.module.scss";
const Completedlist = ({ todos }) => {
  const completedArray = todos.filter((item) => {
    return item.completed === true;
  });
  return (
    <Fragment>
      <h3 className={classes.completed_title}>
        Completed ({completedArray.length})
      </h3>
      <ul>
        {completedArray.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Completedlist;
