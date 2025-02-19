import React, { ReactNode } from "react";
import Image from "next/image";
import cx from "classnames";
import styles from "./CavelaRecommended.module.scss";
import CavelaIcon from "./../../../public/cavela-icon.svg";

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
      <div className={styles.label}>
        <Image src={CavelaIcon} alt="check icon" />
        Cavela Recommended
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CavelaRecommended;
