import React from 'react';
import Logo from '@/common/Logo';
import themeConstants from '@/themeConstants/index';
import Link from 'next/link';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import config from '@/configConstants';

const { NAV_ITEMS } = config;
const { sidebarOuterBoxStyles } = themeConstants;

const SideBar: React.FC = () => {
    const router = useRouter();
    const path = router.pathname;

    return (
        <Stack sx={sidebarOuterBoxStyles} spacing="16">
            <Logo />

            <Stack direction={'column'} spacing={'14'}>
                {NAV_ITEMS.map(({ icon, link, name }) => (
                    <Link href={link} key={link}>
                        <a>
                            <Flex
                                align="center"
                                gap="10px"
                                className={path === link ? 'linkActiveStyles' : null}
                                _hover={{ color: 'blue.500' }}
                            >
                                <Text>{icon}</Text>
                                <Text as="p">{name}</Text>
                            </Flex>
                        </a>
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
};

export default SideBar;
