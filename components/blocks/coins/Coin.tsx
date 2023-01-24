import React, { useState } from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import Lottie from 'lottie-react';
import bitcoin from '@/animations/bitcoin.json';
import CoinCard from '@/common/CoinCard';
import { Button, Input } from '@chakra-ui/react';

const Coin: React.FC = () => {
    const { data, isFetching } = useGetCryptosQuery(1000);
    const coinPerRow = 9;
    const [next, setNext] = useState(coinPerRow);
    const [loading, setLoading] = useState(false);
    const coins = data?.data?.coins;

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setNext(next + coinPerRow);
            setLoading(false);
        }, 3000);
    };

    if (isFetching) return <Spinner />;
    return (
        <section className="p-1 lg:p-6 space-y-4 mb-20 lg:mb-20">
            <div className="w-2/3 lg:w-1/2 mx-auto">
                <Input name="" variant="filled" placeholder="Search Cryptocurrency" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {coins?.slice(0, next).map((coin) => (
                    <CoinCard key={coin.uuid} {...coin} />
                ))}
            </div>
            <div className="flex justify-center">{loading && <Lottie animationData={bitcoin} className="w-24" />}</div>{' '}
            {next < coins?.length && (
                <div className="flex justify-center">
                    <Button onClick={handleLoadMore}>Load More Coins</Button>
                </div>
            )}
        </section>
    );
};

export default Coin;
