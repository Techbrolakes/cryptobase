import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetCryptoStats, IGetCryptoDetails, IGetCryptoHistory } from './interface';

const coinRankingApiHeaders = {
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RapidAPI_Host,
    'X-RapidAPI-Key': '9b38a7098cmsh2b5f1cd6d23f129p1c3affjsnbad795183d39',
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
        getCryptosPriceHistory: builder.query<IGetCryptoHistory, string>({
            query: (id) => createRequest(`/coin/${id}/history`),
        }),
    }),
    reducerPath: 'coinRankingApi',
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptosPriceHistoryQuery } = coinRankingApi;
