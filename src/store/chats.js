import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: 'chats',
    initialState: [],
    reducers: {
        addChat(state, action) {state.push(action.payload)},
        addMessage(state, action) {
            const {chatId, message} = action.payload
            const index = state.findIndex((el) => el.id === chatId)
            state[index].messages.push(message)
        }
    }
})

export const { addChat, addMessage } = chatSlice.actions
export default chatSlice.reducer