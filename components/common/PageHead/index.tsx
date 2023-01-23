import React from 'react';
import Head from 'next/head';
import constants from './constant';

const { APP_NAME, PAGE_HEAD } = constants;

interface IProps {
    description?: string;
    keywords?: string[];
    title: string;
}

const PageHead: React.FC<IProps> = ({ title, description, keywords }: IProps) => {
    return (
        <Head>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords?.join(',')} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{`${APP_NAME} - ${title}`}</title>
        </Head>
    );
};

PageHead.defaultProps = {
    description: PAGE_HEAD.pageDescription,
    keywords: PAGE_HEAD.keywords,
};

export default PageHead;
