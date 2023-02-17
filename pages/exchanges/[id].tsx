import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import config from '@config/constants';
import MainLayout from '@/layouts/MainLayout';
import PageHead from '@/common/PageHead';
import Spinner from '@/common/Spinner/Index';
import { useGetExchangesByIdQuery } from '@/services/CoingeckoApi';
import ExchangesDetails from '@/blocks/exchanges/ExchangesDetails';

const { CLIENT_ROUTES } = config;

interface IProps {
    id: string;
}

const ExchangeDetail: NextPage<IProps> = ({ id }: IProps) => {
    const { data, isFetching } = useGetExchangesByIdQuery(id);
    console.log(data);

    return (
        <MainLayout>
            <PageHead title="Coin Details" />
            {isFetching && <Spinner />}
            <ExchangesDetails data={data} />
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

export default ExchangeDetail;
