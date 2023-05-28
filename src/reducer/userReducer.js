import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserApi, logoutUserApi, signUpUserApi } from "../api/userApis";
import { UserLogin } from "../model/UserLoginReq";
import User from "../model/User";
import { STATUS } from "../util/constants";

const initialState = {
    userLoginStatus: STATUS.IDLE,
    userSignupStatus: STATUS.IDLE,
    userLogoutStatus: STATUS.IDLE,
    user: {}
};

const reducers = {};

const extraReducers = builder => {
    builder.addCase(userLogin.pending, (state, action) => {
        state.userLoginStatus = STATUS.LOADING;
    })
    .addCase(userLogin.fulfilled, (state, action) => {
        state.userLoginStatus = STATUS.SUCCESS;
        state.user = action.payload;
    })
    .addCase(userLogin.rejected, (state, action) => {
        state.userLoginStatus = STATUS.FAILURE;
        state.user = {};
    })
    .addCase(userSignUp.pending, (state, action) => {
        state.userSignupStatus= STATUS.LOADING;
    })
    .addCase(userSignUp.fulfilled, (state, action) => {
        state.userSignupStatus = STATUS.SUCCESS;
        state.user = action.payload;
    })
    .addCase(userSignUp.rejected, (state, action) => {
        state.userSignupStatus = STATUS.FAILURE;
        state.user = {};
    })
    .addCase(userLogout.pending, (state, action) => {
        state.userLoginStatus = STATUS.LOADING;
    })
    .addCase(userLogout.fulfilled, (state, action) => {
        state.userLoginStatus = STATUS.SUCCESS;
        state.user = {};
    })
    .addCase(userLogout.rejected, (state, action) => {
        state.userLoginStatus = STATUS.FAILURE;
    });
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers,
    extraReducers
});

const userLogin = createAsyncThunk(
    'user/login',
    async (params) => {
        const { email, id } = params;
        const response = await loginUserApi(id, email);
        return response.data;
    }
);

const userSignUp = createAsyncThunk(
    'user/signup',
    async (user) => {
        const response = await signUpUserApi(user);
        return response.data;
    }
);

const userLogout = createAsyncThunk(
    'user/logout',
    async (id) => {
        await logoutUserApi(id);
    }
);

export const {} = userSlice.actions;

export default userSlice.reducer;