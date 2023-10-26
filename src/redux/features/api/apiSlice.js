import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl || "http://localhost:8080" || "https://api-center-for-react.onrender.com"
    }),
    tagTypes: [],
    endpoints: () => ({})
});

export default ApiSlice;
