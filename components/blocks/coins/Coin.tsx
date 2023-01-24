import React, { useState } from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import CoinCard from '@/common/CoinCard';
import { Button, Input } from '@chakra-ui/react';

const Coin: React.FC = () => {
    const { data, isFetching } = useGetCryptosQuery(100);
    const coinPerRow = 9;
    const [next, setNext] = useState(coinPerRow);

    const handleLoadMore = () => {
        setNext(next + coinPerRow);
    };
    const coins = data?.data?.coins;

    if (isFetching) return <Spinner />;
    return (
        <section className="p-3 lg:p-6 space-y-12 mb-20">
            <div className="w-2/3 lg:w-1/2 mx-auto">
                <Input name="" variant="filled" placeholder="Search Cryptocurrency" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {coins?.slice(0, next).map((coin) => (
                    <CoinCard key={coin.uuid} {...coin} />
                ))}
            </div>
            {next < coins?.length && (
                <div className="flex justify-center mt-8">
                    <Button onClick={handleLoadMore}>Load More Coins</Button>
                </div>
            )}
        </section>
    );
};

export default Coin;
