import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const coinRankingApiHeaders = {
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_COINNEWS_X_RapidAPI_Host,
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_COINNEWS_X_RapidAPI_KEY,
};

const createRequest = (url) => ({ headers: coinRankingApiHeaders, url });

export const coinNewsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_COINNEWWS_API_URL }),
    endpoints: () => ({}),
    reducerPath: 'coinNewsApi',
});

const {} = coinNewsApi;
