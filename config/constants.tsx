import icons from '@/icons';
import React from 'react';

const { BsCurrencyExchange, MdHome, SiBitcoinsv, GiNewspaper } = icons;
const ENVIRONMENT = {
    development: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development',
    production: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
};

const CLIENT_ROUTES = {
    coins: '/coins',
    coinsDetails: '/coins/%id%',
    exchangeDetails: '/exchanges/%id%',
    exchanges: '/exchanges',
    home: '/',
    news: '/news',
};

const NAV_ITEMS = [
    {
        icon: <MdHome />,
        link: CLIENT_ROUTES.home,
        name: 'Home',
    },
    {
        icon: <SiBitcoinsv />,
        link: CLIENT_ROUTES.coins,
        name: 'Coins',
    },
    {
        icon: <BsCurrencyExchange />,
        link: CLIENT_ROUTES.exchanges,
        name: 'Exchanges',
    },
    {
        icon: <GiNewspaper />,
        link: CLIENT_ROUTES.news,
        name: 'News',
    },
];
const config = {
    CLIENT_ROUTES,
    ENVIRONMENT,
    NAV_ITEMS,
};

export default config;
