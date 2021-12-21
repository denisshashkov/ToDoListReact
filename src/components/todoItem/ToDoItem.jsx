import React, { Fragment, useContext } from "react";
import { Context } from "../../context/context";
import DeleteItemIcon from "./DeleteItemIcon";
import EditItemIcon from "./EditItemIcon";
import classes from "./ToDoItem.module.scss";

const TodoItem = ({ title, id, completed }) => {
  const { toggleToDo, removeToDo, editToDo } = useContext(Context);

  const cls = [classes.todo];
  if (completed) {
    cls.push(classes.completed);
  }

  return (
    <li className={cls.join(" ")}>
      <input
        type="checkbox"
        checked={completed}
        className={classes.todo_checkbox}
        onChange={() => toggleToDo(id)}
      />
      <span className={classes.todo_title}>{title}</span>
      <div className={classes.todo_icon_wrapper}>
        {completed === false ? (
          <Fragment>
            <button
              className={classes.todo_button}
              onClick={() => editToDo(title, id)}
            >
              <EditItemIcon />
            </button>
          </Fragment>
        ) : (
          ""
        )}
        <button className={classes.todo_button} onClick={() => removeToDo(id)}>
          <DeleteItemIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
