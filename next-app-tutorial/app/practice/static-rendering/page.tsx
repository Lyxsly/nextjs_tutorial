import React from "react";
import { Box } from "../../components/Box";
import { StaticServerComponent } from "@/app/components/StaticServerComponent";
import { StaticClientComponent } from "@/app/components/StaticClientComponent";

const StaticRenderingPage = () => {
  return (
    <Box>
      <h1>Static Rendering Page</h1>
      <StaticServerComponent text="Static Server ComponentへのProp" />
      <StaticClientComponent text="Static Client ComponentへのProp" />
    </Box>
  );
};

export default StaticRenderingPage;
