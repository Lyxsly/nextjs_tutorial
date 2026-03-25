import React from "react";
import { Box } from "../../components/Box";
import { DynamicServerComponent } from "@/app/components/DynamicServerComponent";
import { StaticClientComponent } from "@/app/components/StaticClientComponent";

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1>Dynamic Rendering Page</h1>
      <DynamicServerComponent text="Dynamic Server ComponentへのProp" />
      <StaticClientComponent text="Static Client ComponentへのProp" />
    </Box>
  );
};

export default DynamicRenderingPage;
