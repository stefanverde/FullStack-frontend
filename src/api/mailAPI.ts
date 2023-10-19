import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const mailApi = createApi({
  reducerPath: 'mailAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_MAIL_API_URL,
  }),
  endpoints: (builder) => ({
    sendMail: builder.mutation({
      query: (body) => {
        return {
          url: '/sendMail',
          method: 'POST',
          body: {
            email: body,
          },
        };
      },
    }),
  }),
});

export const { useSendMailMutation } = mailApi;
