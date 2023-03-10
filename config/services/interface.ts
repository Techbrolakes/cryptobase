export interface IGetAllNews {
    yahoo: {
        title: string;
        url: string;
        description: string;
    }[];
    coindesk: {
        title: string;
        url: string;
        description: string;
    }[];
    coinjournal: {
        title: string;
        url: string;
        description: string;
    }[];
    cointelegraph: {
        title: string;
        url: string;
        description: string;
    }[];
    cryptoninjas: {
        title: string;
        url: string;
        description: string;
    }[];
}

export interface IGetExchangesDetails {
    name: string;
    year_established: number;
    country: string;
    description: string;
    url: string;
    image: string;
    facebook_url: string;
    reddit_url: string;
    telegram_url: string;
    slack_url: string;
    other_url_1: string;
    other_url_2: string;
    twitter_handle: string;
    has_trading_incentive: boolean;
    centralized: boolean;
    public_notice: string;
    alert_notice: string;
    trust_score: number;
    trust_score_rank: number;
    trade_volume_24h_btc: number;
    trade_volume_24h_btc_normalized: number;
}
export interface IGetExchanges {
    id: string;
    name: string;
    year_established: number;
    country: string;
    description: string;
    url: string;
    image: string;
    has_trading_incentive: boolean;
    trust_score: number;
    trust_score_rank: number;
    trade_volume_24h_btc: number;
    trade_volume_24h_btc_normalized: number;
}
export interface IGetCryptoHistory {
    data: {
        change: number;
        history: {
            price: number;
            timestamp: number;
        }[];
    };
}

export interface IGetCryptoDetails {
    data: {
        coin: {
            uuid: string;
            symbol: string;
            name: string;
            description: string;
            color: string;
            iconUrl: string;
            websiteUrl: string;
            links: {
                name: string;
                type: string;
                url: string;
            }[];
            supply: {
                confirmed: boolean;
                supplyAt: number;
                total: number;
                circulating: number;
            };
            numberOfMarkets: string;
            numberOfExchanges: string;
            marketCap: string;
            fullyDilutedMarketCap: number;
            price: number;
            btcPrice: number;
            priceAt: number;
            change: number;
            rank: number;
            volume: number;
        };
    };
}

export interface IGetCryptoStats {
    data: {
        stats: {
            total: number;
            totalCoins: number;
            totalMarkets: number;
            totalExchanges: number;
            totalMarketCap: number;
            total24hVolume: number;
        };
        coins: {
            uuid: string;
            symbol: string;
            name: string;
            color: string;
            iconUrl: string;
            marketCap: number;
            price: number;
            listedAt: number;
            tier: number;
            change: number;
            rank: number;
            lowVolume: boolean;
            btcPrice: number;
        }[];
    };
}
