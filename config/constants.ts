const ENVIRONMENT = {
    development: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development',
    production: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
};

const CLIENT_ROUTES = {
    coins: '/coins',
    home: '/',
};

const constants = {
    CLIENT_ROUTES,
    ENVIRONMENT,
};

export default constants;
