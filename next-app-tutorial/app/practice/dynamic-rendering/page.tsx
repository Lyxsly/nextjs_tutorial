import React from "react";
import { Box } from "../../components/Box";
import { DynamicServerComponent } from "@/app/components/DynamicServerComponent";

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1>Dynamic Rendering Page</h1>
      <DynamicServerComponent text="Dynamic Sercer ComponentへのProp" />
    </Box>
  );
};

export default DynamicRenderingPage;
