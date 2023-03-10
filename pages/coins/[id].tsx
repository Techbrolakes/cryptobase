import React from 'react';
import PageHead from '@/common/PageHead';
import MainLayout from '@/layouts/MainLayout';
import { GetServerSideProps, NextPage } from 'next';
import config from '@config/constants';
import { useGetCryptoDetailsQuery } from '@/services/CoinRankingApi';
import SingleCoinDetails from '@/blocks/coins/SingleCoinDetails';
import Spinner from '@/common/Spinner/Index';

const { CLIENT_ROUTES } = config;

interface IProps {
    id: string;
}

const CoinDetails: NextPage<IProps> = ({ id }: IProps) => {
    const { data, isFetching } = useGetCryptoDetailsQuery(id);

    return (
        <MainLayout>
            <PageHead title="Coin Details" />
            {isFetching && <Spinner />}
            <SingleCoinDetails data={data} />
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params?.id;

    if (!id) {
        return {
            props: {},
            redirect: {
                destination: CLIENT_ROUTES.home,
                parmanent: false,
            },
        };
    }

    return {
        props: {
            id,
        },
    };
};

export default CoinDetails;
