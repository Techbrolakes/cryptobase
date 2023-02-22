import { Badge, Text } from '@chakra-ui/react';
import React from 'react';

interface IProps {
    title: string;
    url: string;
}
const NewsCard: React.FC<IProps> = ({ title, url }) => {
    return (
        <a className="cursor-pointer block" href={url} target="_blank" rel="noreferrer">
            <section className="flex justify-between items-center cursor-pointer">
                <div>
                    <Text noOfLines={2} className="cb-span text-base font-medium">
                        {title}
                    </Text>
                </div>
                <section>
                    <a className="cursor-pointer" href={url} target="_blank" rel="noreferrer">
                        <Badge variant="solid" fontSize={'12px'} colorScheme="linkedin">
                            Read News
                        </Badge>
                    </a>
                </section>
            </section>
        </a>
    );
};

export default NewsCard;
