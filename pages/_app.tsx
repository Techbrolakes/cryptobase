import React from 'react';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'styles/overrides.scss';
import 'styles/nprogress.css';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@theme';
import { store } from '@config/store/store';
import { Provider } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    );
}

export default MyApp;
