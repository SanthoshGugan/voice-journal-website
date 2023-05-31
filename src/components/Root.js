import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <Box>
            <Header/>
            <div style={{
                display: 'flex',
                height: '94vh'
            }}>
                <NavBar />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 'auto 1 0'
                }}>
                    <Outlet />  
                </div>
            </div>
        </Box>
    );
};

export default Root;