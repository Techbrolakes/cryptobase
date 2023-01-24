import { IGetCryptoDetails } from '@/services/interface';
import React from 'react';

interface IProps {
    data: IGetCryptoDetails;
}

const SingleCoinDetails: React.FC<IProps> = ({ data }: IProps) => {
    return (
        <div>
            <h1>{data?.data?.coin.name}</h1>
        </div>
    );
};

export default SingleCoinDetails;
