export type TMarketData = {
    ask: number
    bid: number
    day_percentage_change: number
    market: string
    market_ranking: string
    spread: number
    symbol: string
}

export type TMarketDataResponse = {
    trading_platform_asset_listing: any
    active_symbols: TMarketData[]
    req_id: number
    error: any
}

export type TAvailableLiveMarkets =
    | 'forex'
    | 'derived'
    | 'indices'
    | 'cryptocurrency'
    | 'commodities'

export type TMarketButtons = {
    id: number
    src: string
    button_text: string
    market_name: TAvailableLiveMarkets
    market_description: string
}