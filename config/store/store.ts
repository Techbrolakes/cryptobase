import { configureStore } from '@reduxjs/toolkit';
import { coinRankingApi } from '@/services/CoinRankingApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { coinGeckoApi } from '@/services/CoingeckoApi';
import { coinNewsApi } from '@/services/CryptonewsApi';

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinRankingApi.middleware).concat(coinGeckoApi.middleware),
    reducer: {
        [coinRankingApi.reducerPath]: coinRankingApi.reducer,
        [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
        [coinNewsApi.reducerPath]: coinNewsApi.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
