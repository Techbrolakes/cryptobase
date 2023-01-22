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
        heading: 'duffish, serif',
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
            text: {
                _dark: 'gray.50',
                _light: 'gray.500',
                default: 'gray.400',
            },
        },
    },
    textStyles: {
        h1: {
            // you can also use responsive styles
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            lineHeight: '110%',
        },
        h2: {
            fontSize: ['36px', '48px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
        },
        h3: {
            fontSize: ['24px', '36px', '48px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
        },
        p: {
            fontSize: ['14px', '15px', '16px'],
            fontWeight: 'medium',
            lineHeight: '24px',
        },
    },
});

export default theme;
