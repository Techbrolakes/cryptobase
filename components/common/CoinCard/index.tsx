import { Avatar, Box } from '@chakra-ui/react';
import millify from 'millify';
import React from 'react';
import config from '@config/constants';
import { useRouter } from 'next/router';

const { CLIENT_ROUTES } = config;
interface IProps {
    uuid?: string;
    rank: number;
    name: string;
    iconUrl: string;
    marketCap: number;
    change: number;
    btcPrice: number;
}
const CoinCard: React.FC<IProps> = ({ btcPrice, change, iconUrl, marketCap, name, rank, uuid }: IProps) => {
    const router = useRouter();
    return (
        <Box
            className="w-full lg:w-[330px] shadow-2xl space-y-12 p-8 cursor-pointer"
            onClick={() => router.push(CLIENT_ROUTES.coinsDetails.replace('%id%', uuid))}
        >
            <section className="flex justify-between items-center">
                <span className="cb-text">
                    {rank} - {name}
                </span>

                <Avatar src={iconUrl} size={'sm'} />
            </section>

            <section className="space-y-4">
                <p className="cb-text tracking-wide"> Market Price: {millify(marketCap)}</p>
                <p className="cb-text tracking-wide"> Daily Change: {change}%</p>
                <p className="cb-text tracking-wider"> Price: {millify(btcPrice, { precision: 6 })} </p>
            </section>
        </Box>
    );
};

export default CoinCard;
