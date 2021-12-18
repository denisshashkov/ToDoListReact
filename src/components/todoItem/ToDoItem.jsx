import React, { useContext } from "react";
import { Context } from "../../context/context";
import CopyItemIcon from "./CopyItemIcon";
import Deleteitemicon from "./DeleteItemIcon";
import Edititemicon from "./EditItemIcon";
import classes from "./ToDoItem.module.scss";

const TodoItem = ({ title, id, completed }) => {
  const { toggleToDo, removeToDo } = useContext(Context);

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
        <button>
          <Edititemicon />
        </button>
        <button>
          <CopyItemIcon />
        </button>
        <button onClick={() => removeToDo(id)}>
          <Deleteitemicon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
