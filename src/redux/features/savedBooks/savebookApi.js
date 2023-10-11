import ApiSlice from "../api/apiSlice";

const savedBookApi = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        // get all savedBooks
        getSavedBooks: builder.query({
            query: () => ({
                url: `/saved-books`,
            }),
        }),
        // get saved books by user 
        getUserSavedBooks: builder.query({
            query: (id) => ({
                url: `/saved-books?student_id=${id}`,
            }),
        }),
        // get single save book
        addSavedBook: builder.mutation({
            query: (data) => ({
                url: `/saved-books`,
                method: 'POST',
                body: data
            }),
        }), 
         // get single save book
         deleteSavedBook: builder.mutation({
            query: (id) => ({
                url: `/saved-books/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(id, { queryFulfilled, dispatch }) {
                let updateToSavedBooks = dispatch(
                  ApiSlice.util.updateQueryData("getSavedBooks", undefined, (draft) => {
                     const indexToRemove = draft.findIndex(v => v.id == id);
                     if(indexToRemove !== -1){
                      draft.splice(indexToRemove, 1);
                     }
                  })
                );
        
                try{
                  await queryFulfilled;
                }catch(e){
                    updateToSavedBooks.undo();
                }
                
              },
        }), 
    })
});

export const {useGetSavedBooksQuery, useAddSavedBookMutation, useDeleteSavedBookMutation, useGetUserSavedBooksQuery} = savedBookApi;