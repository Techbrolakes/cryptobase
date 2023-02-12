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
