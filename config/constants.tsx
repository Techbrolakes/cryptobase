import React from 'react';
import icons from '@/icons';

const { BsCurrencyExchange, MdHome, SiBitcoinsv, GiMonkey, SiAboutdotme } = icons;
const ENVIRONMENT = {
    development: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development',
    production: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
};

const CLIENT_ROUTES = {
    coins: '/coins',
    exchanges: '/exchanges',
    home: '/',
    nft: '/nfts',
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
        icon: <GiMonkey />,
        link: CLIENT_ROUTES.nft,
        name: 'Nfts',
    },
];
const config = {
    CLIENT_ROUTES,
    ENVIRONMENT,
    NAV_ITEMS,
};

export default config;
