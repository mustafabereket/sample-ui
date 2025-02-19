import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ type = "primary", text, action, icon }) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.primaryButton]: type == "primary",
        [styles.secondaryButton]: type == "secondary",
      })}
      onClick={action}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
