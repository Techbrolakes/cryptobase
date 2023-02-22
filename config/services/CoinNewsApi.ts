import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetAllNews } from './interface';

const coinRankingApiHeaders = {
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_COINNEWS_X_RapidAPI_Host,
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_COINNEWS_X_RapidAPI_KEY,
};

const createRequest = (url) => ({ headers: coinRankingApiHeaders, url });

export const coinNewsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_COINNEWS_API_URL }),
    endpoints: (builder) => ({
        getAllNews: builder.query<IGetAllNews, number>({
            query: () => createRequest('all'),
        }),
    }),
    reducerPath: 'coinNewsApi',
});

export const { useGetAllNewsQuery } = coinNewsApi;
