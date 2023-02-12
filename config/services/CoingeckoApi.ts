import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetExchanges } from './interface';

const createRequest = (url) => ({ url });

export const coinGeckoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_COINGECKO_API_URL }),
    endpoints: (builder) => ({
        getExchanges: builder.query<IGetExchanges[], number>({
            query: () => createRequest('/exchanges'),
        }),
    }),
    reducerPath: 'coinGeckoApi',
});

export const { useGetExchangesQuery } = coinGeckoApi;
