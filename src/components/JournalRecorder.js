import React from "react";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { AccountCircle } from "@mui/icons-material";


const JournalRecorder = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '4rem'
        }}>
            <div style={{
                padding: '1rem',
                border: '2px solid #acacac',
                borderRadius: '50px',
                backgroundColor: '#f2f2f2',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <KeyboardVoiceIcon sx={{
                    fontSize: '60px'
                }}/>
            </div>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                With a start adornment
                </InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <DriveFileRenameOutlineIcon />
                    </InputAdornment>
                }
                />
            </FormControl>
        </div>
    );
};

export default JournalRecorder;