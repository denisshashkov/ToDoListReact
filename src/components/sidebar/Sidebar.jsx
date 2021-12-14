import React from "react";
import SidebarIcon from "./SidebarIcon";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <SidebarIcon />
    </aside>
  );
};

export default Sidebar;
