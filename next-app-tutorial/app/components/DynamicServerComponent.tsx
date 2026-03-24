import { cookies } from "next/headers";
import React from "react";
import { Box } from "./Box";
type PropsType = {
  text: string;
};

export const DynamicServerComponent = async ({ text }: PropsType) => {
  const cookieStore = await cookies();
  const username = cookieStore.get("username")?.value ?? "Guest";
  return (
    <Box>
      <h2>Dynamic Server Component</h2>
      <p>{text}</p>
      <p>Welcome, {username}!</p>
    </Box>
  );
};
