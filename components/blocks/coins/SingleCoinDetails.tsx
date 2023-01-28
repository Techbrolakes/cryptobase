/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IGetCryptoDetails } from '@/services/interface';
import { Avatar } from '@chakra-ui/react';
import Spinner from '@/common/Spinner/Index';
import HTMLReactParser from 'html-react-parser';

interface IProps {
    data: IGetCryptoDetails;
}

const SingleCoinDetails: React.FC<IProps> = ({ data }: IProps) => {
    const details = data?.data?.coin;

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

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* COIN DESC */}
                <div>
                    <h1 className="cb-heading-five !capitalize"> {details?.name} Details</h1>
                    <p className="coin-desc space-y-4">{HTMLReactParser(details?.description)}</p>
                </div>

                {/* COIN STATS */}
                <div></div>
            </section>
        </div>
    );
};

export default SingleCoinDetails;
