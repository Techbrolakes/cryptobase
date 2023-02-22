import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import news from '@/animations/85190-news.json';
import NewsCard from '@/common/NewsCard';
import { useGetAllNewsQuery } from '@/services/CoinNewsApi';
import Loading from '@/common/Loading';

const CointelegraphSection: React.FC = () => {
    const { data, isFetching } = useGetAllNewsQuery(100);
    const [cointelegraph, setCointelegraph] = useState(8);
    const [loading, setLoading] = useState(false);
    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCointelegraph(cointelegraph + 8);
            setLoading(false);
        }, 3000);
    };

    if (isFetching) return <Loading />;
    return (
        <section className="space-y-5">
            <h6 className="cb-heading-six">Cointelegraph News</h6>
            <div className="space-y-8">
                {data?.cointelegraph.slice(0, cointelegraph).map((info) => (
                    <NewsCard key={info.title} {...info} />
                ))}
                <div className="flex justify-center animate-bounce">
                    {loading && <Lottie animationData={news} className="w-32" />}
                </div>

                {cointelegraph < data?.cointelegraph?.length && (
                    <div className="flex justify-center">
                        <Button onClick={handleLoadMore}>Load More News</Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CointelegraphSection;
