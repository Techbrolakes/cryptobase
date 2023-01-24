import React from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import { Avatar, Box } from '@chakra-ui/react';
import millify from 'millify';
import CoinCard from '@/common/CoinCard';

const CryptoList: React.FC = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const coins = data?.data?.coins;

    return (
        <div className="p-6 space-y-20">
            <section className="flex justify-between items-center">
                <h5 className="cb-heading-five">Top 10 Cryptos In The World</h5>
                <h6 className="cb-heading-six">Show More</h6>
            </section>

            {isFetching ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-3 gap-6">
                    {coins?.map((coin) => (
                        <CoinCard key={coin.uuid} {...coin} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CryptoList;
