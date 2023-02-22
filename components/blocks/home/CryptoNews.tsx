import React from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import config from '@config/constants';
import { useRouter } from 'next/router';
import Loading from '@/common/Loading';
import YahooSection from '../news/YahooSection';

const { CLIENT_ROUTES } = config;
const CryptoNews: React.FC = () => {
    const router = useRouter();
    const { data, isFetching } = useGetCryptosQuery(12);
    const coins = data?.data?.coins;

    return (
        <section className="p-4 lg:p-6 space-y-20">
            {!coins ? (
                <Loading />
            ) : (
                <div>
                    <section className="flex justify-between items-center mb-12">
                        <h5 className="cb-text lg:cb-heading-five">Get Updated With Everything Crypto</h5>
                        <h6
                            className="cb-text lg:cb-heading-six cursor-pointer"
                            onClick={() => router.push(CLIENT_ROUTES.news)}
                        >
                            Show More
                        </h6>
                    </section>

                    {isFetching ? <Spinner /> : <YahooSection showHeader={false} />}
                </div>
            )}
        </section>
    );
};

export default CryptoNews;
