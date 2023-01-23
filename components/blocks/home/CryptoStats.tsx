import React from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';

const CryptoStats: React.FC = () => {
    const { isFetching, data } = useGetCryptosQuery();

    return (
        <div>
            <h1>{data?.data?.stats?.totalMarketCap}</h1>
        </div>
    );
};

export default CryptoStats;
