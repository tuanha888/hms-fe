import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        value: " "
    },
    reducers: {
        setNotification: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setNotification} = notificationSlice.actions;
export default notificationSlice.reducer;