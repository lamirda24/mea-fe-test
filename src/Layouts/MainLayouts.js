import React from "react";
import styles from "./MainLayout.module.css";

const MainLayouts = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <p>header</p>
      {children}
    </div>
  );
};

export default MainLayouts;
