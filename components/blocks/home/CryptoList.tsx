import React from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import CoinCard from '@/common/CoinCard';
import config from '@config/constants';
import { useRouter } from 'next/router';

const { CLIENT_ROUTES } = config;
const CryptoList: React.FC = () => {
    const router = useRouter();
    const { data, isFetching } = useGetCryptosQuery(12);
    const coins = data?.data?.coins;

    return (
        <div className="p-6 space-y-20">
            <section className="flex justify-between items-center">
                <h5 className="cb-text lg:cb-heading-five">Top 12 Cryptos In The World</h5>
                <h6
                    className="cb-text lg:cb-heading-six cursor-pointer"
                    onClick={() => router.push(CLIENT_ROUTES.coins)}
                >
                    Show More
                </h6>
            </section>

            {isFetching ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
                    {coins?.map((coin) => (
                        <CoinCard key={coin.uuid} {...coin} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CryptoList;
