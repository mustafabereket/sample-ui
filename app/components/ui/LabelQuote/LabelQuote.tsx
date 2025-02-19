import React from "react";
import styles from "./LabelQuote.module.scss";
import cx from "classnames";

type LabelTypes = "fastest-lead-time" | "best-value" | "highly-rated";

const LabelQuote = ({ type }) => {
  return (
    <div
      className={cx(styles.labelQuoteContainer, {
        [styles.bestValue]: type == "best-value",
      })}
    >
      <div className={styles.textArea}>Best Value</div>
    </div>
  );
};

export default LabelQuote;
