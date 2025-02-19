import React from "react";
import styles from "./LabelQuote.module.scss";
import cx from "classnames";

type LabelTypes = {
  type: "fastest-lead-time" | "best-value" | "highly-rated";
};

const textConfig = {
  "fastest-lead-time": "Fastest",
  "best-value": "Best Value",
  "highly-rated": "Highly Rated",
};

const LabelQuote = ({ type }: LabelTypes) => {
  return (
    <div
      className={cx(styles.labelQuoteContainer, {
        [styles.bestValue]: type == "best-value",
        [styles.fastValue]: type == "fastest-lead-time",
        [styles.highlyRated]: type == "highly-rated",
      })}
    >
      <div className={styles.textArea}>
        {textConfig[type] ? textConfig[type] : "N/A"}
      </div>
    </div>
  );
};

export default LabelQuote;
