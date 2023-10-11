import ApiSlice from "../api/apiSlice";

const userApi = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        // get single user
        userLogin: builder.mutation({
            query: (data) => ({
                url: `/login`,
                method: 'POST',
                body: data
            }),
        }),
        // get single user
        userRegister: builder.mutation({
            query: (data) => ({
                url: `/signup`,
                method: 'POST',
                body: data
            }),
        }), 
        // edit user info 
        editUser : builder.mutation({
            query: (data) => ({
                url: `/users/${data.id}`,
                method: 'PATCH',
                body: data
            }),
        }), 
    })
});

export const {useUserLoginMutation , useUserRegisterMutation, useEditUserMutation} = userApi;