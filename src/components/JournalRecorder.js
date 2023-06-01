import React, { useRef, useState } from "react";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { uploadJournalAudio } from "../reducer/journalReducer";
import { useDispatch } from "react-redux";


const JournalRecorder = () => {
    const dispatch = useDispatch();

    const [isRecording, setIsRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);
    const [filename, setFileName] = useState('');
    const [fileNameEmptyCheck, setFileNameEmptyCheck] = useState(false);

    const audioStreamRef = useRef(null);
    const mediaRecorderRef = useRef(null);

    const startRecording = async () => {
        try {
            const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioStreamRef.current = audioStream;
            const mediaRecorder = new MediaRecorder(audioStream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.addEventListener('dataavailable', (event) => {
                if (event.data.size > 0) { 
                    setAudioChunks((chunks) => [...chunks, event.data]);
                }
            });
            mediaRecorder.start();
            setIsRecording(true);
        } catch(err) {
            console.error("Error accessing microphone : "+err);
        }
    };

    const stopRecording = () => {
        const mediaRecorder = mediaRecorderRef.current;
        const audioStream = audioStreamRef.current;
        mediaRecorder.stop();
        audioStream.getTracks().forEach((track) => track.stop());
        setIsRecording(false);
        mediaRecorderRef.current = null;
        audioStreamRef.current = null;
    }

    const downloadAudio = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const link = document.createElement('a');
        link.href = audioUrl;
        link.download = 'recording.mp3';
        link.click();
    }

    const handleRecord = () => {
        if (isRecording) stopRecording();
        else startRecording();
    }

    const uploadAudioJournal = async () => {
        if (filename == '') {
            setFileNameEmptyCheck(true);
            return;
        }
        const audioFile = new Blob(audioChunks, { type: 'audio/mp3' });
        await dispatch(uploadJournalAudio({audioFile, filename, journal_id: 1 }));
    }

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
                <IconButton onClick={() => handleRecord()}>
                    <KeyboardVoiceIcon sx={{
                        fontSize: '60px',
                        color: isRecording ? '#FFB6FF' : 'grey'
                    }}/>
                </IconButton>
            </div>
            <div style={{ opacity: isRecording ? '100%': '0%'}} >recording...</div>
            <div style={{ opacity: fileNameEmptyCheck ? '100%': '0%', color: 'red'}} >File name is empty</div>

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
                    onChange={e => {setFileName(e.target.value);}}
                    value={filename}
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '1rem'
                }}>
                    <Button variant="outlined" style={{
                        flex: '5rem 0 0'
                    }}
                    onClick={() => uploadAudioJournal()}
                    > Upload </Button>
                </div>
                
            </FormControl>
        </div>
    );
};

export default JournalRecorder;