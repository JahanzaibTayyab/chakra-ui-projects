"use client";
import "@fontsource/inter";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Inter' ,sans-serif",
    body: "'Inter' , sans-serif",
  },
});

export default theme;
