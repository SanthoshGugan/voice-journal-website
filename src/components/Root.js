import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <Box>
            <Header/>
            <Box>
            <NavBar />
            <Outlet />
            </Box>
        </Box>
    );
};

export default Root;