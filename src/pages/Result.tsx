import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>Result</div>;
};

export default Result;
