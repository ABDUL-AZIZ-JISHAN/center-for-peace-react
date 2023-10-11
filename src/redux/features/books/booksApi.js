import ApiSlice from "../api/apiSlice";

const BooksApi = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        // get all books
        getBooks: builder.query({
            query: () => ({
                url: `/books`
            }),
        }),
        // get single book
        getBook: builder.query({
            query: (title) => ({
                url: `/books?name_like=${title}&limit=1`,
            }),
        }), 
    })
});

export const {useGetBookQuery, useGetBooksQuery} = BooksApi;