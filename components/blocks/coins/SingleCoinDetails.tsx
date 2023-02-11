/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IGetCryptoDetails } from '@/services/interface';
import { Avatar, Skeleton } from '@chakra-ui/react';
import Spinner from '@/common/Spinner/Index';
import HTMLReactParser from 'html-react-parser';
import { useGetCryptosPriceHistoryQuery } from '@/services/CoinRankingApi';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts';
import millify from 'millify';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

interface IProps {
    data: IGetCryptoDetails;
}

const SingleCoinDetails: React.FC<IProps> = ({ data }: IProps) => {
    const details = data?.data?.coin;
    const { data: coinHistory, isFetching } = useGetCryptosPriceHistoryQuery(details?.uuid);
    const router = useRouter();
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(
            millify(coinHistory?.data?.history[i].price, {
                precision: 3,
            }),
        );
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(
            dayjs(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()).format('DD MMM YYYY'),
        );
    }

    const options: ApexOptions = {
        chart: {
            animations: {
                animateGradually: {
                    delay: 150,
                    enabled: true,
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                },
                easing: 'easeinout',
                enabled: true,
                speed: 800,
            },
            background: '#fff',
            height: 600,
            zoom: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        },
        grid: {
            borderColor: '#90A4AE',
            column: {
                colors: undefined,
                opacity: 0.5,
            },
            padding: {
                bottom: -10,
                left: 10,
                right: 10,
                top: 0,
            },
            position: 'back',
            row: {
                colors: undefined,
                opacity: 0.5,
            },
            show: true,
            strokeDashArray: 0,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        markers: {
            colors: undefined,
            discrete: [],
            fillOpacity: 1,
            hover: {
                size: undefined,
                sizeOffset: 3,
            },
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            radius: 2,
            shape: 'circle',
            showNullDataPoints: true,
            size: 0,
            strokeColors: '#fff',
            strokeDashArray: 0,
            strokeOpacity: 0.9,
            strokeWidth: 2,
        },
        stroke: {
            curve: 'straight',
        },
        tooltip: {
            custom: undefined,
            enabled: true,
            enabledOnSeries: undefined,
            fillSeriesColor: false,
            fixed: {
                enabled: false,
                offsetX: 0,
                offsetY: 0,
                position: 'topRight',
            },
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            items: {
                display: 'flex',
            },
            marker: {
                show: true,
            },
            onDatasetHover: {
                highlightDataSeries: false,
            },
            shared: true,
            style: {
                fontFamily: undefined,
                fontSize: '16px',
            },
            x: {
                format: 'dd MMM',
                formatter: undefined,
                show: true,
            },
            y: {
                formatter: undefined,
                title: {
                    formatter: (seriesName) => seriesName,
                },
            },
            z: {
                formatter: undefined,
                title: 'Size: ',
            },
        },
        xaxis: {
            categories: coinTimestamp,
        },
    };

    const series = [
        {
            data: coinPrice,
            name: 'prices',
        },
    ];

    if (!details) return <Spinner />;
    return (
        <div className="p-6 space-y-12">
            <section className="text-center space-y-4">
                <div className="flex items-center gap-3 justify-center">
                    <Avatar src={details?.iconUrl} size={'sm'} />
                    <h4 className="cb-heading-four">
                        {details?.name} ({details?.symbol}) Price
                    </h4>
                </div>
                <p className="cb-span">
                    {details?.name} is ranked <span className="font-bold">{details?.rank}</span> in the crypto world.
                    View value statistics, market cap and supply
                </p>
            </section>

            {/* COIN CHART */}
            <section>
                {isFetching ? <Skeleton /> : <ApexCharts type="area" height="350" options={options} series={series} />}
            </section>

            {/* COIN DESC */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h1 className="cb-heading-five !capitalize"> {details?.name} Details</h1>
                    <p className="coin-desc space-y-4">{HTMLReactParser(details?.description)}</p>
                </div>

                {/* COIN LINKS */}
                <div className="space-y-8">
                    <h1 className="cb-heading-five"> {details?.name} Links</h1>
                    <main className="space-y-10 ">
                        {details?.links?.map(({ name, type, url }) => (
                            <section
                                key={type}
                                className="flex justify-between border-b-2 border-spacing-6 border-white"
                            >
                                <span className="font-bold capitalize">{type}</span>
                                <a className="cursor-pointer" href={url} target="_blank" rel="noreferrer">
                                    <span className="text-green-300 font-bold capitalize">{name}</span>
                                </a>
                            </section>
                        ))}
                    </main>
                </div>
            </section>
        </div>
    );
};

export default SingleCoinDetails;
