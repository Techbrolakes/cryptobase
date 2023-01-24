/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo } from 'react';
import { IGetCryptoDetails } from '@/services/interface';
import { Avatar } from '@chakra-ui/react';
import { useGetCryptosPriceHistoryQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';

interface IProps {
    data: IGetCryptoDetails;
}

const SingleCoinDetails: React.FC<IProps> = ({ data }: IProps) => {
    const details = data?.data?.coin;
    const { data: historyData, isFetching } = useGetCryptosPriceHistoryQuery(data?.data?.coin.uuid);
    // const historyLineData = useMemo(() => {
    //     if (historyData) {
    //         return (historyData.data.history || [])?.map((d) => {
    //             return {
    //                 x: d.price,
    //                 y: d.timestamp,
    //             };
    //         });
    //     }
    //     return [];
    // }, [historyData]);

    if (isFetching) return <Spinner />;
    return (
        <div className="p-6">
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
        </div>
    );
};

export default SingleCoinDetails;
