import { createSlice } from "@reduxjs/toolkit";
import operations from "./Operations";

const initialState ={
    user: { name: null, email: null}, 
    token: null, 
    isLoggedIn: false, 
    isRefreshing: false,
};

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(operations.register.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(operations.logIn.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(operations.logOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
    }
});

export default authSlice.reducer;