import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetCryptoStats, IGetCryptoDetails } from './interface';

const coinRankingApiHeaders = {
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RapidAPI_Host,
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_KEY,
};

const createRequest = (url) => ({ headers: coinRankingApiHeaders, url });

export const coinRankingApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_COINRANKING_API_URL }),
    endpoints: (builder) => ({
        getCryptoDetails: builder.query<IGetCryptoDetails, string>({
            query: (id) => createRequest(`/coin/${id}`),
        }),
        getCryptos: builder.query<IGetCryptoStats, number>({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    }),
    reducerPath: 'coinRankingApi',
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = coinRankingApi;
