import React from 'react';
import { useGetCryptosQuery } from '@/services/CoinRankingApi';
import Spinner from '@/common/Spinner/Index';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import millify from 'millify';

const CryptoStats: React.FC = () => {
    const { isFetching, data } = useGetCryptosQuery();
    const stats = data?.data?.stats;

    if (isFetching) return <Spinner />;
    return (
        <Box className="space-y-12 p-6">
            <Text textStyle={'h1'}>Global Crypto Stats</Text>
            <Flex justify={'space-between'} direction={['column', 'column', 'column', 'row']}>
                <Stack className="space-y-12">
                    <Box className="space-y-4">
                        <Text textStyle={'h4'}>Total Cryptocurrencies</Text>
                        <Text textStyle={'p'}>{millify(stats.totalCoins, { precision: 6 })}</Text>
                    </Box>

                    <Box className="space-y-4">
                        <Text textStyle={'h4'}>Total Market Cap:</Text>
                        <Text textStyle={'p'}>${millify(stats.totalMarketCap, { precision: 6 })}</Text>
                    </Box>
                </Stack>

                <Stack className="space-y-12">
                    <Box className="space-y-4">
                        <Text textStyle={'h4'}>Total Exchanges</Text>
                        <Text textStyle={'p'}>Over {millify(stats.totalExchanges, { precision: 6 })} Exchanges</Text>
                    </Box>

                    <Box className="space-y-4">
                        <Text textStyle={'h4'}>Total Markets</Text>
                        <Text textStyle={'p'}>${millify(stats.totalMarkets, { precision: 6 })}</Text>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
};

export default CryptoStats;
