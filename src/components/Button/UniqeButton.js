import React from "react";
import styles from "./UniqeButton.module.css";

const UniqeButton = props => {
  return (
    <button className={styles.Button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default UniqeButton;
