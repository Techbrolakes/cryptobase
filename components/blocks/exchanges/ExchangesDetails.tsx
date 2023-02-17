import { IGetExchangesDetails } from '@/services/interface';
import { Avatar } from '@chakra-ui/react';
import icons from '@/icons';

import React from 'react';
import millify from 'millify';
import Loading from '@/common/Loading';

const {
    AiOutlineDollarCircle,
    SiBaremetrics,
    BiHash,
    GiTwoCoins,
    FcGlobe,
    FaFacebook,
    FaReddit,
    AiOutlineMoneyCollect,
} = icons;

interface IProps {
    data: IGetExchangesDetails;
}
const ExchangesDetails: React.FC<IProps> = ({ data }: IProps) => {
    const STATS = [
        {
            icon: <GiTwoCoins />,
            name: 'Exchange Name',
            value: data?.name,
        },
        {
            icon: <SiBaremetrics />,
            name: 'Exchange Icon',
            toggle: true,
            value: data?.image,
        },
        {
            icon: <BiHash />,
            name: 'Rank',
            value: data?.trust_score_rank,
        },
        {
            icon: <FcGlobe />,
            name: 'Year Established',
            value: data?.year_established,
        },
        {
            icon: <FcGlobe />,
            name: 'Country',
            value: data?.country,
        },
    ];

    const STATS2 = [
        {
            head: 'Facebook',
            icon: <FaFacebook />,
            name: 'Facebook URL',
            value: data?.facebook_url,
        },
        {
            head: 'Reddit',
            icon: <FaReddit />,
            name: 'Reddit URL',
            value: data?.reddit_url,
        },
        {
            head: 'Website',
            icon: <FcGlobe />,
            name: 'Website URL',
            value: data?.url,
        },
        {
            head: 'Steemit',
            icon: <FcGlobe />,
            name: 'Steemit URL',
            value: data?.other_url_2,
        },
        {
            head: 'Medium',
            icon: <FcGlobe />,
            name: 'Medium URL',
            value: data?.other_url_1,
        },
    ];

    if (!data) return <Loading />;
    return (
        <div className="p-6 space-y-24">
            <main className="text-center space-y-4">
                <section className="flex items-center justify-center gap-4">
                    <Avatar src={data?.image} size={'sm'} />
                    <h4 className="cb-heading-five text-center">Exchange Name - {data?.name}</h4>
                </section>
                <p className="cb-span">
                    {data?.name} is ranked {data?.trust_score_rank} in the Exchange World. View value statistics, market
                    cap and supply
                </p>
            </main>

            {/* EXCHANGES OVERVIEW */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-10">
                    <main>
                        <h1 className="cb-heading-five !capitalize"> {data?.name} Value Statistics</h1>
                        <p className="coin-desc space-y-4">
                            An overview showing the statistics of {data?.name}, such as the base and quote currency, the
                            rank, and trading volume.
                        </p>
                    </main>
                    <main className="space-y-14">
                        {STATS?.map(({ name, value, icon, toggle }) => (
                            <section key={name} className="flex justify-between border-b-2 pb-2 border-white">
                                <div className="flex gap-3 items-center">
                                    <span className="text-2xl ">{icon}</span>

                                    <span className="font-bold capitalize">{name}</span>
                                </div>
                                {toggle ? (
                                    <Avatar src={String(value)} size={'sm'} />
                                ) : (
                                    <span className="font-bold capitalize">{value}</span>
                                )}
                            </section>
                        ))}
                    </main>
                </div>

                {/* COIN OTHER STATS */}
                <div className="space-y-14">
                    <main>
                        <h1 className="cb-heading-five"> Other Stats Info</h1>
                        <p className="coin-desc space-y-4">
                            An overview showing the statistics of {data?.name}, such as the base and quote currency, the
                            rank, and trading volume.
                        </p>
                    </main>
                    <main className="space-y-14">
                        {STATS2?.map(({ name, value, icon, head }) => (
                            <section key={name} className="flex justify-between border-b-2 pb-2 border-white">
                                <div className="flex gap-3 items-center">
                                    <span className="text-2xl">{icon}</span>
                                    <span className="font-bold capitalize">{name}</span>
                                </div>
                                <a
                                    href={value}
                                    target="_blank"
                                    className="font-bold capitalize text-green-400"
                                    rel="noreferrer"
                                >
                                    {head}
                                </a>
                            </section>
                        ))}
                    </main>
                </div>
            </section>
        </div>
    );
};

export default ExchangesDetails;
