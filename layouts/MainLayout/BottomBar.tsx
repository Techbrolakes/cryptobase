import React from 'react';
import config from '@config/constants';
import Link from 'next/link';
import { Stack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
const { NAV_ITEMS } = config;

const BottomBar: React.FC = () => {
    const router = useRouter();
    const path = router.pathname;

    return (
        <div className="bottombar-layout">
            <Stack direction={'row'} spacing={'10'}>
                {NAV_ITEMS.map(({ icon, link, name }) => (
                    <Link href={link} key={link}>
                        <a>
                            <VStack
                                className={path === link ? 'bottomLinkActiveStyles' : 'bottomLinkInActiveStyles'}
                                _hover={{ color: 'blue.600' }}
                            >
                                <Text fontSize={'2xl'}>{icon}</Text>
                                <Text as="p">{name}</Text>
                            </VStack>
                        </a>
                    </Link>
                ))}
            </Stack>
        </div>
    );
};

export default BottomBar;
