/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IGetCryptoDetails } from '@/services/interface';
import { Avatar } from '@chakra-ui/react';
import { useGetCryptosPriceHistoryQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface IProps {
    data: IGetCryptoDetails;
}

const SingleCoinDetails: React.FC<IProps> = ({ data }: IProps) => {
    const details = data?.data?.coin;
    const { data: historyData, isFetching } = useGetCryptosPriceHistoryQuery(data?.data?.coin.uuid);
    const coinPrice = [];
    const coinTimestamp = [];

    // Getting Individual Prices
    for (let i = 0; i < historyData?.data?.history?.length; i++) {
        coinPrice.push(historyData?.data?.history[i].price);
    }

    // converting the timestamp to date
    for (let i = 0; i < historyData?.data?.history?.length; i++) {
        coinTimestamp.push(new Date(historyData?.data?.history[i].timestamp).toLocaleDateString());
    }

    // Setting up the data
    const historyInfo = {
        datasets: [
            {
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
                data: coinPrice,
                fill: false,
                label: 'Price In USD',
            },
        ],
        labels: coinTimestamp,
    };

    // Setting up the options
    const options = {
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        responsive: true,
    };

    if (isFetching) return <Spinner />;
    return (
        <div className="p-6 space-y-6">
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

            <div className="bg-white shadow-2xl rounded-lg">
                <Line data={historyInfo} options={options} className="p-4" />
            </div>
        </div>
    );
};

export default SingleCoinDetails;
