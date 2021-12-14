import React from "react";
import UserImage from "../../assets/user.jpg";
import VectorIcon from "./VectorIcon";
import classes from "./User.module.scss";

const User = () => {
  return (
    <div className={classes.user}>
      <span>Leanne Graham</span>
      <img src={UserImage} alt="User" />
      <VectorIcon />
    </div>
  );
};

export default User;
