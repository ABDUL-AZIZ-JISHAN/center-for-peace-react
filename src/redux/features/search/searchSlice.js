
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search : "",
    popularSearch: [
        "Discovering The Quran",
        "THE WAY TO FIND GOD",
        "THE SEEKER’S GUIDE",
        "SPRIT OF RAMADAN"
    ],
    activePage: "Home"
}
const SearchSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addSearch : (state, action ) => {
             state.search = action.payload;
        },
        clearSearch :() =>{
            state.search = "";
        }
        ,
        addPopularSearch: (state, action) =>{
            state.recent.unshift(action.payload);
        },
        addActivePage : (state, action) =>{
            state.activePage = action.payload;
        }
    }
});

export default SearchSlice.reducer;
export const {addSearch, clearSearch, addPopularSearch , addActivePage} = SearchSlice.actions;