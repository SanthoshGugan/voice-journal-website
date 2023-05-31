import React, { useState } from "react";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, colors } from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { AccountCircle } from "@mui/icons-material";
import CheckIcon from '@mui/icons-material/Check';


const JournalRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
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
                border: '2px solid',
                borderColor: isRecording ? '#f2f2f2' : '#acacac',
                borderRadius: '50px',
                backgroundColor: isRecording ? '#BFB6FF': '#f2f2f2',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <IconButton onClick={() => setIsRecording(!isRecording)}>
                    <KeyboardVoiceIcon sx={{
                        fontSize: '60px',
                        color: isRecording ? '#FFB6FF' : 'grey'
                    }}/>
                </IconButton>
            </div>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                Journal Name
                </InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <DriveFileRenameOutlineIcon />
                    </InputAdornment>
                }
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '1rem'
                }}>
                    <Button variant="outlined" style={{
                        flex: '5rem 0 0'
                    }}> Upload </Button>
                </div>
                
            </FormControl>
        </div>
    );
};

export default JournalRecorder;