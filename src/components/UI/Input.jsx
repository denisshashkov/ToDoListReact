import React from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <input {...props} />
    </div>
  );
};

export default Input;
