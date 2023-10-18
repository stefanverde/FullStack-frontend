import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const checkEmailApi = createApi({
  reducerPath: 'checkEmailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/users`,
    
  }),
  endpoints: (builder) => ({
    checkExistingMail: builder.query({
      query: (formData) => `${formData.email}`,
      
    }),
  }),
});

export const { useCheckExistingMailQuery } = checkEmailApi;
