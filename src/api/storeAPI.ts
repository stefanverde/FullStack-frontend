import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const storeAPI = createApi({
  reducerPath: 'storeAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001/item`,
  }),
  endpoints: builder => ({
    getByBrand: builder.query({
      query: brand => `/byBrand/${brand}`,
    }),
  }),
});

export const { useGetByBrandQuery } = storeAPI;
