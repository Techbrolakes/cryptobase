/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import { Box } from '@chakra-ui/react';
import millify from 'millify';
import { Swiper, SwiperSlide } from 'swiper/react';
import icons from '@/icons';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

const { FaCoins, FaMoneyBill, FaExchangeAlt, FaStore } = icons;
const CryptoStats: React.FC = () => {
    const { isFetching, data } = useGetCryptosQuery(2);
    const stats = data?.data?.stats;
    const statsArray = [
        {
            icon: <FaCoins />,
            name: 'Total Cryptos',
            value: stats?.totalCoins,
        },
        {
            icon: <FaMoneyBill />,
            name: 'Total Market Cap',
            value: stats?.totalMarketCap,
        },
        {
            icon: <FaExchangeAlt />,
            name: 'Total Exchanges',
            value: stats?.totalExchanges,
        },
        {
            icon: <FaStore />,
            name: 'Total Market',
            value: stats?.totalMarkets,
        },
    ];

    if (isFetching) return <Spinner />;
    return (
        <Box className="lg:space-y-10 p-6">
            <h4 className="cb-heading-four mb-4">Global Crypto Stats</h4>
            <div className="flex justify-start">
                <Swiper
                    className="w-auto md:w-[70vw] h-[220px] !ml-[-10px]"
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        850: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {statsArray?.map(({ value, icon, name }) => (
                        <SwiperSlide key={value}>
                            <section className="space-y-4 shadow-lg rounded-md py-6 px-5 w-full lg:w-[320px]">
                                <span className="text-3xl">{icon}</span>
                                <h6 className="cb-heading-six">{name}</h6>
                                <p className="cb-text tracking-wider">{millify(value, { precision: 6 })}</p>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Box>
    );
};

export default CryptoStats;
