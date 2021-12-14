import React, { useState } from "react";
import CopyItemIcon from "./CopyItemIcon";
import Deleteitemicon from "./DeleteItemIcon";
import Edititemicon from "./EditItemIcon";
import classes from "./ToDoItem.module.scss";

const TodoItem = ({ title, id, completed }) => {
  const [checked, setChecked] = useState(completed);

  const cls = [classes.todo];
  if (checked) {
    cls.push(classes.completed);
  }

  return (
    <li className={cls.join(" ")}>
      <input
        type="checkbox"
        checked={checked}
        className={classes.todo_checkbox}
        onChange={() => setChecked(!checked)}
      />
      <span className={classes.todo_title}>{title}</span>
      <div className={classes.todo_icon_wrapper}>
        <Edititemicon />
        <CopyItemIcon />
        <Deleteitemicon />
      </div>
    </li>
  );
};

export default TodoItem;
