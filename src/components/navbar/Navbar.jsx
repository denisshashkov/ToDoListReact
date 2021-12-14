import React from "react";
import Navbaricon from "./NavbarIcon";
import User from "./User";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_logo}>
        <div className={classes.logo}>
          <Navbaricon />
          <p>To-Do</p>
        </div>
        <h3>Tasks</h3>
      </div>
      <User />
    </nav>
  );
};

export default Navbar;
