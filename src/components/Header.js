import React from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import { toggleNavVisibility } from "../reducer/appReducer";
import { useDispatch, useSelector } from "react-redux";
export const Header = () => {

    const { isNavVisible } = useSelector(state => state.app);
    const dispatch = useDispatch();

    const toggleNav = () => {
        dispatch(toggleNavVisibility(!isNavVisible));
    };
    return <div style={{
        height: '6vh',
        borderBottom: '0.1rem solid grey',
        backgroundColor: '#A396FF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem'
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <IconButton color="success" onClick={() => toggleNav()} >
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
