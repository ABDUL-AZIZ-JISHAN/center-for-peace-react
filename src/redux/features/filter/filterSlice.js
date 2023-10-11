
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   year: [1927, 2023],
    categories : [
    "Islamic History",
    "Islamic Spirituality",
    "Islam And The Modern Age",
    "Religion And Science",
    "Peace In Islam",
    "True Face Of Islam",
  ],
  languages : ["Arabic", "English", "Urdu", "Spanish", "Bangla"]
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
      updateFilter: (state , action ) =>{
        state = action.payload;
      }
    }
});

export default filterSlice.reducer;
export const {updateFilter} = filterSlice.actions;