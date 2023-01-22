// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
    config,
    fonts: {
        body: 'satoshi, sans-serif',
        heading: 'fenway, serif',
        mono: 'Menlo, monospace',
    },
    layerStyles: {
        base: {
            bg: 'gray.50',
            border: '2px solid',
            borderColor: 'gray.500',
        },
        selected: {
            bg: 'teal.500',
            borderColor: 'orange.500',
            color: 'teal.700',
        },
    },
    semanticTokens: {
        colors: {
            primary: {
                _dark: 'red.400',
                default: 'red.500',
            },
            secondary: {
                _dark: 'red.700',
                default: 'red.800',
            },
            text: {
                _dark: 'red.500',
                _light: '#000',
                default: 'gray.900',
            },
        },
    },
    textStyles: {
        h1: {
            // you can also use responsive styles
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            letterSpacing: '-2%',
            lineHeight: '110%',
        },
        h2: {
            fontSize: ['36px', '48px'],
            fontWeight: 'semibold',
            letterSpacing: '-1%',
            lineHeight: '110%',
        },
    },
});

export default theme;
