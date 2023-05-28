import React from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
export const Header = () => {
    return <div style={{
        minHeight: '4rem',
        borderBottom: '0.1rem solid grey',
        backgroundColor: '#A396FF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0  2rem'
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <IconButton color="success" >
                <DensityMediumIcon />
            </IconButton>
        </div>
        <div>
            <IconButton color="default">
                <AccountCircleIcon />
            </IconButton>
        </div>

    </div>
};
