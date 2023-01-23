import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IGetCryptoStats {
    data: {
        stats: {
            total: number;
            totalCoins: number;
            totalMarkets: number;
            totalExchanges: number;
            totalMarketCap: number;
            total24hVolume: number;
        };
    };
}
const coinRankingApiHeaders = {
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RapidAPI_Host,
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_KEY,
};

const createRequest = (url) => ({ headers: coinRankingApiHeaders, url });

export const coinRankingApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_COINRANKING_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query<IGetCryptoStats, void>({
            query: () => createRequest('/coins'),
        }),
    }),
    reducerPath: 'coinRankingApi',
});

export const { useGetCryptosQuery } = coinRankingApi;
