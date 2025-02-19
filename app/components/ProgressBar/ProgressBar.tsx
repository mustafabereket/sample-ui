"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ProgressBar.module.scss";
import cx from "classnames";

import PersonIcon from "../../../public/person-icon.svg";
import ChatIcon from "../../../public/chat-icon.svg";
import SendIcon from "../../../public/send-icon.svg";
import DollarIcon from "../../../public/dollar-icon.svg";

const ProgressBar = () => {
  const stepsList = [
    {
      icon: PersonIcon,
      text: (
        <>
          Identified <span className={styles.numberHighlight}>115</span> best
          matches out of 2,081,201 suppliers
        </>
      ),
      subText:
        "We search for suppliers that match your exact product requirement and location.",
    },
    {
      icon: SendIcon,
      text: (
        <>
          Reached out to <span className={styles.numberHighlight}>115</span>{" "}
          suppliers
        </>
      ),
      subText:
        "We share your product info with matched suppliers to understand their interest.",
    },
    {
      icon: ChatIcon,
      text: "Engaging suppliers",
      subText:
        "We communicate with interested suppliers to verify their terms to prep for quotes.",
    },
    {
      icon: DollarIcon,
      text: "Received quotes",
      subText: "We receive detailed quote that is ready for you to select.",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= stepsList.length ? 1 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressBarContainer}>
        {stepsList.map((step, index) => (
          <div
            key={index}
            className={cx(styles.row, {
              [styles.active]: index === 0 || index < activeStep,
              [styles.notActive]: index !== 0 && index >= activeStep,
            })}
          >
            <div className={styles.iconContainer}>
              <Image
                src={step.icon}
                alt={`${step.text} icon`}
                width={16}
                height={16}
              />
            </div>

            <div className={styles.textArea}>
              <div className={styles.mainText}>{step.text}</div>
              <div className={"secondaryText"}>{step.subText}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
