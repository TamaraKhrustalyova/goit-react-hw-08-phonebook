import { createSlice } from "@reduxjs/toolkit";
import operations from "./Operations";

const initialState ={
    user: { name: null, email: null}, 
    token: null, 
    isLoggedIn: false, 
    isRefreshing: false,
};

const { register, logIn, logOut, fetchCurrentUser } = operations;

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(fetchCurrentUser.fulfilled, (state, {payload}) => {
            state.user = payload;
            state.isLoggedIn = true;
        })
    }
});

export default authSlice.reducer;