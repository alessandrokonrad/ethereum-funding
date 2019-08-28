import React from "react";
import styles from "./UniqeInput.module.css";

const UniqeInput = props => {
  return (
    <form>
      <input
        style={{ width: props.width, height: props.height }}
        className={styles.Input}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = `${props.placeholder}`)}
      ></input>
    </form>
  );
};

export default UniqeInput;
