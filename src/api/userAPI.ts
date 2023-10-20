import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_USER_API_URL,
  }),
  endpoints: (builder) => ({
    checkExistingMail: builder.query({
      query: (email) => `/byEmail/${email}`,
    }),
    userDetails: builder.query({
      query: (userId) => `/details/${userId}`,
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => {
        console.log();
        return {
          url: `/updatePassword`,
          method: 'PUT',

          body: {
            token: body.token,
            password: body.newPassword,
          },
        };
      },
    }),
  }),
});

export const {
  useCheckExistingMailQuery,
  useAddUserMutation,
  useResetPasswordMutation,
  useUserDetailsQuery,
} = userApi;
