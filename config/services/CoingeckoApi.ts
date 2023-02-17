import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetExchanges, IGetExchangesDetails } from './interface';

const createRequest = (url) => ({ url });

export const coinGeckoApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_COINGECKO_API_URL }),
    endpoints: (builder) => ({
        getExchanges: builder.query<IGetExchanges[], number>({
            query: () => createRequest('/exchanges'),
        }),
        getExchangesById: builder.query<IGetExchangesDetails, string>({
            query: (id) => createRequest(`/exchanges/${id}`),
        }),
    }),
    reducerPath: 'coinGeckoApi',
});

export const { useGetExchangesQuery, useGetExchangesByIdQuery } = coinGeckoApi;
