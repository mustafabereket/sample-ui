import React, { ReactNode } from "react";
import cx from "classnames";
import styles from "./CavelaRecommended.module.scss";

type CavelaRecommendedProps = {
  children: ReactNode;
  customStyle?: object;
};

const CavelaRecommended = ({
  children,
  customStyle = {},
}: CavelaRecommendedProps) => {
  console.log(customStyle);
  return (
    <div className={cx(styles.card)} style={customStyle}>
      <div className={styles.label}>Cavela Recommended</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CavelaRecommended;
