import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authApi = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_AUTH_API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: '/login',
          method: 'POST',
          body:{
            email: body.email,
            password: body.password
          }
        };
      },
    }),
  }),
});
console.log('authApi',authApi);
export const { useLoginMutation } = authApi;
