import React, { ReactNode } from "react";
import cx from "classnames";
import styles from "./CavelaRecommended.module.scss";

const CavelaRecommended = ({ children, customStyle = {} }) => {
  console.log(customStyle);
  return (
    <div className={cx(styles.card)} style={customStyle}>
      <div className={styles.label}>Cavela Recommended</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CavelaRecommended;
