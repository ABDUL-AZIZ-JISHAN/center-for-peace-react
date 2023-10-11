import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'



const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_BASE_URL || "http://localhost:9000/"
    }),
    tagTypes: [],
    endpoints: () => ({})
});

export default ApiSlice;