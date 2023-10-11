import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'



const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000/"
    }),
    tagTypes: [],
    endpoints: () => ({})
});

export default ApiSlice;