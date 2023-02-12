import React, { useState } from 'react';
import { useGetExchangesQuery } from '@/services/CoingeckoApi';
import Spinner from '@/common/Spinner/Index';
import { Avatar, Box, Button, Input } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import bitcoin from '@/animations/bitcoin.json';

const ExchangesSection: React.FC = () => {
    const { data, isFetching } = useGetExchangesQuery(10);
    const coinPerRow = 9;
    const [next, setNext] = useState(coinPerRow);
    const [loading, setLoading] = useState(false);

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
                <Input name="" variant="filled" placeholder="Search Exchanges" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {data?.map(({ name, image, trust_score_rank, country }) => (
                    <Box className="w-full lg:w-[330px] shadow-md space-y-12 p-8 cursor-pointer" key={name}>
                        <section className="flex justify-between items-center">
                            <article className="flex gap-3 items-center">
                                <span className="cb-text">{trust_score_rank}</span>
                                <span className="cb-text">{name}</span>
                            </article>
                            <Avatar src={image} size={'sm'} />
                        </section>

                        <section className="space-y-4">
                            <p className="cb-text tracking-wide"> Country - {country} </p>
                            <p className="cb-text tracking-wide"> Daily Change:</p>
                            <p className="cb-text tracking-wider"> Price:</p>
                        </section>
                    </Box>
                ))}
            </div>
            <div className="flex justify-center">{loading && <Lottie animationData={bitcoin} className="w-24" />}</div>{' '}
            {next < data?.length && (
                <div className="flex justify-center">
                    <Button onClick={handleLoadMore}>Load More Coins</Button>
                </div>
            )}
        </section>
    );
};

export default ExchangesSection;
