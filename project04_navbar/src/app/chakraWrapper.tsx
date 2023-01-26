"use client";
import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
function ChakraWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript />
      <ChakraProvider>{children}</ChakraProvider>
    </>
  );
}

export default ChakraWrapper;
