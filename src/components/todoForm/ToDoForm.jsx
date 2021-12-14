import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./ToDoForm.module.scss";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className={classes.Form} onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="+ Add a task, press Enter to save"
        value={input}
        onChange={changeHandler}
      />
      <Button>Add</Button>
    </form>
  );
};

export default TodoForm;
