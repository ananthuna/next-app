"use client";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import TopBanner from "../../components/TopBanner";
import React, { useState } from "react";

export default function Home() {
  const [colors, setColors] = useState({
    button: "#d50000",
    text: "#000000",
    light: "#A3A3A3",
    headerbg:'#FAFAFA'
  });
  return (
    <Box>
      <Header colors={colors} />
      <TopBanner colors={colors} />
    </Box>
  );
}
