import React from "react";

const Heading = ({ text, size }) => {
  return <div style={{ fontSize: `${size}px` }}>{text}</div>;
};

export default Heading;
