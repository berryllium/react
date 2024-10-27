import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: 'chats',
    initialState: [],
    reducers: {
        addChat(state, action) { state.push(action.payload) },
        addMessage(state, action) {
            const { chatId, message } = action.payload
            const index = state.findIndex((el) => el.id === chatId)
            state[index].messages.push(message)
        },
    }
})

// Thunk
export const addMessageWithReplay = (payload) => (dispatch) => {
    dispatch(chatSlice.actions.addMessage(payload));
    setTimeout(() => {
        dispatch(chatSlice.actions.addMessage({
            chatId: payload.chatId,
            message: {
                text: 'This is bot\'s answer!',
                author: 'bot'
            }
        }));
    }, 1000);
};

export const { addChat, addMessage } = chatSlice.actions
export default chatSlice.reducer