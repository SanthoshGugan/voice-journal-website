import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTagToJournalApi, getJournalByTagNameApi, getTagApi, postTagApi } from "../api/tagApi";
import { AddTagToJournalClass } from "../model/AddTagToJournal";
import { STATUS } from "../util/constants";

const initialState = {
    createTagStatus: STATUS.IDLE,
    fetchTagStatus: STATUS.IDLE,
    addTagToJournalStatus: STATUS.IDLE,
    getJournalByTagNameStatus: STATUS.IDLE,
    getTagsForJournalStatus: STATUS.IDLE,
    tagsForJournal: [],
    journalsForTag: []
};

const reducers = {};

const extraReducers = builder => {
    builder.addCase(createTag.pending, state => {
        state.createTagStatus = STATUS.LOADING;
    })
    .addCase(createTag.fulfilled, state => {
        state.createTagStatus = STATUS.SUCCESS;
    })
    .addCase(createTag.rejected, state => {
        state.createTagStatus = STATUS.FAILURE;
    })
    .addCase(getTag.fulfilled, state => {
        state.fetchTagStatus = STATUS.SUCCESS;
    })
    .addCase(getTag.rejected, state => {
        state.fetchTagStatus = STATUS.FAILURE;
    })
    .addCase(getTag.pending, state => {
        state.fetchTagStatus = STATUS.LOADING;
    })
    .addCase(addTagToJournal.pending, state => {
        state.addTagToJournalStatus = STATUS.FAILURE;
    })
    .addCase(addTagToJournal.fulfilled, state => {
        state.addTagToJournalStatus = STATUS.SUCCESS;
    })
    .addCase(addTagToJournal.rejected, state => {
        state.addTagToJournalStatus = STATUS.FAILURE;
    })
    .addCase(getJournalsByTagName.pending, state => {
        state.getJournalByTagNameStatus = STATUS.FAILURE;
    })
    .addCase(getJournalsByTagName.fulfilled, (state, action) => {
        state.getJournalByTagNameStatus = STATUS.SUCCESS;
        state.journalsForTag = action.payload || [];
    })
    .addCase(getJournalsByTagName.rejected, state => {
        state.getJournalByTagNameStatus = STATUS.FAILURE;
    })
    .addCase(getTagsForJournal.pending, state => {
        state.getTagsForJournalStatus = STATUS.FAILURE;
    })
    .addCase(getTagsForJournal.fulfilled, (state, action) => {
        state.getTagsForJournalStatus = STATUS.SUCCESS;
        state.tagsForJournal = action.payload || [];
    })
    .addCase(getTagsForJournal.rejected, state => {
        state.getTagsForJournalStatus = STATUS.FAILURE;
    });
};

const tagSlice = createSlice({
    name: 'tagReducer',
    initialState,
    reducers,
    extraReducers
});

// create tag
export const createTag = createAsyncThunk(
    'tags/create',
    async (tag) => {
        const response = await postTagApi(tag);
        return response.data;
    }
);

// get tag
export const getTag = createAsyncThunk(
    'tag/fetch',
    async (tag_id) => {
        const response = await getTagApi(tag_id);
        return response.data;
    }
); 


//  connect tag to journal
export const addTagToJournal = createAsyncThunk(
    'tag/addTagToJournal',
    async ({ tag_id, journal_id }) => {
        const response = await addTagToJournalApi(new AddTagToJournalClass(tag_id, journal_id));
        return response.data;
    }
);

// get journals by tag name
export const getJournalsByTagName = createAsyncThunk(
    'tag/getJournalsByTagName',
    async (tag_name) => {
        const response = await getJournalByTagNameApi(tag_name);
        return response.data;
    }
);

// get tags of the journal
export const getTagsForJournal = createAsyncThunk(
    'tag/getTagsForJournal',
    async (journal_id) => {
        const response = await getTagsForJournal(journal_id);
        return response.data;
    }
);

// export const {} = tagSlice.actions;

export default tagSlice.reducer;