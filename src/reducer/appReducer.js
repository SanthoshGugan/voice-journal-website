import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNavVisible: true,
};

const reducers = {
    toggleNavVisibility(state, action) {
        state.isNavVisible = action.payload;
    }
};

const extraReducers = builders => {

};

const appSlice = createSlice({
    name: 'appReducer',
    initialState,
    reducers,
    extraReducers
});


export const {
    toggleNavVisibility
} = appSlice.actions;

export default appSlice.reducer;