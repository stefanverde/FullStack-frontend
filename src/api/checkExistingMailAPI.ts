// const checkExistingMail = (formData: { email: any; }) => {

//     return fetch(
//         `${process.env.REACT_APP_CHECK_EXISTING_EMAIL}${formData.email}`,
//         {
//           method: 'GET',
//           headers: { 'Content-Type': 'application/json' },
//         }
//       );

// }

// export default checkExistingMail;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const checkEmailApi = createApi({
  reducerPath: 'checkEmailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_CHECK_EXISTING_EMAIL}`,
    
  }),
  endpoints: (builder) => ({
    checkExistingMail: builder.query({
      query: (formData) => `${formData.email}`,
      
    }),
  }),
});

export const { useCheckExistingMailQuery } = checkEmailApi;
