import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: 'Adam'
    },
    reducers: {
        changeName(state, action) {state.name = action.payload}
    },
})

export const { changeName } = profileSlice.actions
export default profileSlice.reducer