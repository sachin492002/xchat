import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    posts: [],
};

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
});

export const { } = userSlice.actions;
export default userSlice.reducer;