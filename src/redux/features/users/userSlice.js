
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {}
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser : (state, action ) => {
             state.user = action.payload;
             localStorage.setItem("user", JSON.stringify(state.user));
        },
        removeUser :(state, action) =>{
            state.user = {};
            localStorage.removeItem("user");
        }
    }
});

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions;