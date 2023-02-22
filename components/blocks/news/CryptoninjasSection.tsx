import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import bitcoin from '@/animations/bitcoin.json';
import NewsCard from '@/common/NewsCard';
import { useGetAllNewsQuery } from '@/services/CoinNewsApi';
import Loading from '@/common/Loading';

const CryptoninjasSection: React.FC = () => {
    const { data, isFetching } = useGetAllNewsQuery(100);
    const [cryptoninjas, setCryptoninjas] = useState(8);
    const [loading, setLoading] = useState(false);
    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCryptoninjas(cryptoninjas + 8);
            setLoading(false);
        }, 3000);
    };

    if (isFetching) return <Loading />;
    return (
        <section className="space-y-5">
            <h6 className="cb-heading-six">Cryptoninjas News</h6>
            <div className="space-y-8">
                {data?.cryptoninjas.slice(0, cryptoninjas).map((info) => (
                    <NewsCard key={info.title} {...info} />
                ))}
                <div className="flex justify-center">
                    {loading && <Lottie animationData={bitcoin} className="w-24" />}
                </div>

                {cryptoninjas < data?.cryptoninjas?.length && (
                    <div className="flex justify-center">
                        <Button onClick={handleLoadMore}>Load More News</Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CryptoninjasSection;
