import React from "react";

const MyParagraph = (props) => {
  console.log("myParagraph Running");
  return <p>{props.children}</p>;
};

export default MyParagraph;
