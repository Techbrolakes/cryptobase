import React, { useState } from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import Lottie from 'lottie-react';
import empty from '@/animations/133529-no-data.json';
import bitcoin from '@/animations/bitcoin.json';
import CoinCard from '@/common/CoinCard';
import { Button, Input } from '@chakra-ui/react';
import { isEmpty } from 'lodash';

const Coin: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, isFetching, isLoading } = useGetCryptosQuery(1000);
    const coinPerRow = 9;
    const [next, setNext] = useState(coinPerRow);
    const [loading, setLoading] = useState(false);
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredCoins = data?.data.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setNext(next + coinPerRow);
            setLoading(false);
        }, 3000);
    };

    if (isFetching && isLoading) return <Spinner />;
    return (
        <section className="p-1 lg:p-6 space-y-4 mb-20 lg:mb-20">
            <div className="w-2/3 lg:w-1/2 mx-auto">
                <Input
                    name="searchCoin"
                    variant="filled"
                    placeholder="Search Cryptocurrency"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {filteredCoins?.slice(0, next).map((coin) => (
                    <CoinCard key={coin.uuid} {...coin} />
                ))}
            </div>
            <div className="flex justify-center">{loading && <Lottie animationData={bitcoin} className="w-24" />}</div>
            {next < filteredCoins?.length && (
                <div className="flex justify-center">
                    <Button onClick={handleLoadMore}>Load More Coins</Button>
                </div>
            )}
            {isEmpty(filteredCoins) && (
                <div className="min-h-[70vh] flex justify-center items-center">
                    <main className="flex flex-col justify-center items-center">
                        <Lottie animationData={empty} className="w-80" />
                    </main>
                </div>
            )}
        </section>
    );
};

export default Coin;
