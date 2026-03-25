"use client";
// import { cookies } from "next/headers";
import React, { useState } from "react";
import { Box } from "./Box";
type PropsType = {
  text: string;
};

export const StaticClientComponent = ({ text }: PropsType) => {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };
  return (
    <Box>
      <h2>Static Client Component</h2>
      <p>{text}</p>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>Count: {count}</p>
    </Box>
  );
};
