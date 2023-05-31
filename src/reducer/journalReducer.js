import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createJournalApi, getJournalApi, postJournalAudioApi } from "../api/journalApi";
import Journal from "../model/Journal";
import { STATUS } from "../util/constants";

const initialState = {
    createJournalStatus: STATUS.IDLE,
    fetchJournalStatus: STATUS.IDLE,
    uploadJournalAudioStatus: STATUS.IDLE,
    downloadJOurnalAudioStatus: STATUS.IDLE,
    journal: {},
    journalAudio: null,
};

const reducers = {};

const extraReducers = builders => {

    builders.addCase(createJournal.pending, (state, action) => {
        state.createJournalStatus = STATUS.LOADING;
    })
    .addCase(createJournal.fulfilled, (state, action) => {
        state.createJournalStatus = STATUS.SUCCESS;
    })
    .addCase(createJournal.rejected, (state) => {
        state.createJournalStatus = STATUS.FAILURE;
    })
    .addCase(getJournal.pending, (state, action) => {
        state.fetchJournalStatus = STATUS.LOADING;
    })
    .addCase(getJournal.fulfilled, (state, action) => {
        state.fetchJournalStatus = STATUS.SUCCESS;
    })
    .addCase(getJournal.rejected, (state) => {
        state.fetchJournalStatus = STATUS.FAILURE;
    })
    .addCase(uploadJournalAudio.pending, (state, action) => {
        state.uploadJournalAudioStatus = STATUS.LOADING;
    })
    .addCase(uploadJournalAudio.fulfilled, (state, action) => {
        state.uploadJournalAudioStatus = STATUS.SUCCESS;
    })
    .addCase(uploadJournalAudio.rejected, (state) => {
        state.uploadJournalAudioStatus = STATUS.FAILURE;
    })
    .addCase(downloadJournalAudioApi.pending, (state, action) => {
        state.downloadJOurnalAudioStatus = STATUS.LOADING;
    })
    .addCase(downloadJournalAudioApi.fulfilled, (state, action) => {
        state.downloadJOurnalAudioStatus = STATUS.SUCCESS;
        state.journalAudio = action.payload;
    })
    .addCase(downloadJournalAudioApi.rejected, (state) => {
        state.downloadJOurnalAudioStatus = STATUS.FAILURE;
    });

};

const journalSlice = createSlice({
    name: 'journalReducer',
    initialState,
    reducers,
    extraReducers
});

// create Journal
const createJournal = createAsyncThunk(
    'journal/create',
    async (journal) => {
        const response = await createJournalApi(journal);
        return response.data;
    }
);

const getJournal = createAsyncThunk(
    'journal/fetch',
    async (journal_id) => {
        const response = await getJournalApi(journal_id);
        return response.data;
    }
);

const uploadJournalAudio = createAsyncThunk(
    'journal/uploadAudio',
    async (audioFile) => {
        const response = await postJournalAudioApi(audioFile);
        return response.data;
    }
);

const downloadJournalAudioApi = createAsyncThunk(
    'journal/downloadAudio',
    async (journal_id) => {
        const response = await downloadJournalAudioApi(journal_id);
        return response.data;
    }
);

export const {} = journalSlice.actions;

export default journalSlice.reducer;