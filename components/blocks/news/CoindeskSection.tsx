import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import bitcoin from '@/animations/bitcoin.json';
import NewsCard from '@/common/NewsCard';
import { useGetAllNewsQuery } from '@/services/CoinNewsApi';
import Loading from '@/common/Loading';

const CoindeskSection: React.FC = () => {
    const { data, isFetching } = useGetAllNewsQuery(100);
    const [coindesk, setCoindesk] = useState(8);
    const [loading, setLoading] = useState(false);
    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCoindesk(coindesk + 8);
            setLoading(false);
        }, 3000);
    };

    if (isFetching) return <Loading />;
    return (
        <section className="space-y-5">
            <h6 className="cb-heading-six">CoinDesk News</h6>
            <div className="space-y-8">
                {data?.coindesk.slice(0, coindesk).map((info) => (
                    <NewsCard key={info.title} {...info} />
                ))}
                <div className="flex justify-center">
                    {loading && <Lottie animationData={bitcoin} className="w-24" />}
                </div>

                {coindesk < data?.coindesk?.length && (
                    <div className="flex justify-center">
                        <Button onClick={handleLoadMore}>Load More News</Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CoindeskSection;
