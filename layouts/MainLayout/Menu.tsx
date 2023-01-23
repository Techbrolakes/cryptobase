import Logo from '@/common/Logo';
import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MdHome } from 'react-icons/md';
import constants from '@config/constants';
import themeConstants from '@/themeConstants/index';
import Link from 'next/link';

const { sidebarOuterBoxStyles } = themeConstants;
const { CLIENT_ROUTES } = constants;

const Menu: React.FC = () => {
    return (
        <Stack sx={sidebarOuterBoxStyles} spacing="20">
            <Logo />
            <Stack direction={'column'} spacing={'14'}>
                <Link href={CLIENT_ROUTES.home}>
                    <a>
                        <Flex align="center" gap="10px">
                            <Text>
                                <MdHome />
                            </Text>
                            <Text as="p">Home</Text>
                        </Flex>
                    </a>
                </Link>
                <Link href={CLIENT_ROUTES.coins}>
                    <a>
                        <Flex align="center" gap="10px">
                            <Text>
                                <MdHome />
                            </Text>
                            <Text as="p">Coins</Text>
                        </Flex>
                    </a>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Menu;
