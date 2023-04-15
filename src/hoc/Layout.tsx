import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <Box className="bg-white h-[100vh]  w-[100vw] flex flex-col justify-between ">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
