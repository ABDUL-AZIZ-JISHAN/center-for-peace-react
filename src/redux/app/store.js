import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userSlice'
import ApiSlice from "../features/api/apiSlice";
import SearchReducer from "../features/search/searchSlice";
import filterReducer from "../features/filter/filterSlice";
const store = configureStore({
     reducer: {
        [ApiSlice.reducerPath]: ApiSlice.reducer,
        user: userReducer,
        search: SearchReducer,
        filter: filterReducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiSlice.middleware)
});

export default store;