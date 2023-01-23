import { configureStore } from '@reduxjs/toolkit';
import { coinRankingApi } from '@/services/CoinRankingApi';

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinRankingApi.middleware),
    reducer: {
        [coinRankingApi.reducerPath]: coinRankingApi.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
