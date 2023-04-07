import { TSpecification } from '../_types'

const crypto_specification: TSpecification = {
    market: 'cryptocurrency',
    dl_title: 'Dynamic tiers ⁠— Cryptocurrencies',
    dl_data: [
        {
            from: 0.01,
            to: 1,
            leverage: 300,
        },
        {
            from: 1.01,
            to: 3,
            leverage: 200,
        },
        {
            from: 3.01,
            to: 5,
            leverage: 100,
        },
        {
            from: 5.01,
            to: 10,
            leverage: 50,
        },
    ],
    data: [
        {
            instrument: {
                symbol: 'ADAUSD',
                instrument: 'ADA/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00039,
            target_spread: 0.00064,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ALGORAND',
                instrument: 'ALG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.0006,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'AVALANCHE',
                instrument: 'AVA/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.07,
            swap_short: -0.07,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BAT',
                instrument: 'BAT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.00031,
            target_spread: 0.00043,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BCHNEW',
                instrument: 'BCH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.277,
            target_spread: 0.73,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.05,
            swap_short: -0.05,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BNBUSD',
                instrument: 'BNB/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.276,
            target_spread: 0.337,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCETH',
                instrument: 'BTC/ETH',
            },
            contract_size: 1,
            base_currency: 'ETH',
            minimum_size: 0.01,
            minimum_spread: 0.0386,
            target_spread: 0.03993,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCLTC',
                instrument: 'BTC/LTC',
            },
            contract_size: 1,
            base_currency: 'LTC',
            minimum_size: 0.01,
            minimum_spread: 0.63735,
            target_spread: 0.72504,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCUSD',
                dl_icon: true,
                instrument: 'BTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 18.15,
            target_spread: 20.905,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCETH',
                instrument: 'BTC/XAG',
            },
            contract_size: 1,
            base_currency: 'XAG',
            minimum_size: 0.01,
            minimum_spread: 1.7984,
            target_spread: 1.7984,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCETH',
                instrument: 'BTC/XAU',
            },
            contract_size: 1,
            base_currency: 'XAU',
            minimum_size: 0.01,
            minimum_spread: 0.0217,
            target_spread: 0.0217,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DOGUSD',
                instrument: 'DOG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.0001,
            target_spread: 0.00015,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DOTUSD',
                instrument: 'DOT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.009,
            target_spread: 0.011,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DSHUSD1',
                instrument: 'DSH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.056,
            target_spread: 0.075,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'EOSUSD1',
                instrument: 'EOS/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00095,
            target_spread: 0.00292,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.07,
            swap_short: -0.07,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ETCUSD',
                instrument: 'ETC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.022,
            target_spread: 0.028,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ETHUSD',
                dl_icon: true,
                instrument: 'ETH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.902,
            target_spread: 1.51564,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'FILUSD',
                instrument: 'FIL/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'IOTUSD',
                instrument: 'IOT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.0007,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'LNKUSD',
                instrument: 'LNK/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.008,
            target_spread: 0.01,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'LTCUSD',
                instrument: 'LTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.13751,
            target_spread: 0.24618,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'MKRUSD',
                instrument: 'MKR/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.71,
            target_spread: 0.91,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'MTCUSD',
                instrument: 'MTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00099,
            target_spread: 0.00114,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'NEOUSD',
                instrument: 'NEO/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'OMGUSD',
                instrument: 'OMG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.002,
            target_spread: 0.006,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'SOLUSD',
                instrument: 'SOL/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.016,
            target_spread: 0.02,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'TRXUSD',
                instrument: 'TRX/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.00009,
            target_spread: 0.00016,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'UNIUSD',
                instrument: 'UNI/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.0059,
            target_spread: 0.0096,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XLMUSD',
                instrument: 'XLM/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1000,
            minimum_spread: 0.00012,
            target_spread: 0.00016,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.03,
            swap_short: -0.03,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XMRUSD',
                instrument: 'XMR/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.152,
            target_spread: 0.29,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XRPUSD1',
                instrument: 'XRP/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0002,
            target_spread: 0.0006,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XTZUSD',
                instrument: 'XTZ/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.00095,
            target_spread: 0.00515,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ZECUSD',
                instrument: 'ZEC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.055,
            target_spread: 0.076,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
    ],
    eu_data: [
        {
            instrument: {
                symbol: 'ADAUSD',
                instrument: 'ADA/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00035,
            target_spread: 0.0006,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ALGORAND',
                instrument: 'ALG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.0006,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'AVALANCHE',
                instrument: 'AVA/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.07,
            swap_short: -0.07,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BAT',
                instrument: 'BAT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.00029,
            target_spread: 0.00041,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BCHUSD',
                instrument: 'BCH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.267,
            target_spread: 0.72,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.05,
            swap_short: -0.05,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BNBUSD',
                instrument: 'BNB/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.251,
            target_spread: 0.312,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCETH',
                instrument: 'BTC/ETH',
            },
            contract_size: 1,
            base_currency: 'ETH',
            minimum_size: 0.01,
            minimum_spread: 0.03761,
            target_spread: 0.03894,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCLTC',
                instrument: 'BTC/LTC',
            },
            contract_size: 1,
            base_currency: 'LTC',
            minimum_size: 0.01,
            minimum_spread: 0.61735,
            target_spread: 0.70504,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCUSD',
                instrument: 'BTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 16.5,
            target_spread: 19.255,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DOGUSD',
                instrument: 'DOG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.00009,
            target_spread: 0.00014,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DOTUSD',
                instrument: 'DOT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.008,
            target_spread: 0.01,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DSHUSD',
                instrument: 'DSH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.052,
            target_spread: 0.071,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'EOSUSD',
                instrument: 'EOS/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00086,
            target_spread: 0.00283,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.07,
            swap_short: -0.07,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ETCUSD',
                instrument: 'ETC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.02,
            target_spread: 0.026,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ETHUSD',
                instrument: 'ETH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.82,
            target_spread: 1.43364,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'FILUSD',
                instrument: 'FIL/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'IOTUSD',
                instrument: 'IOT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.0007,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'LNKUSD',
                instrument: 'LNK/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.007,
            target_spread: 0.009,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'LTCUSD',
                instrument: 'LTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.13074,
            target_spread: 0.23941,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'MKRUSD',
                instrument: 'MKR/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.66,
            target_spread: 0.86,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'MTCUSD',
                instrument: 'MTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00091,
            target_spread: 0.00106,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'NEOUSD',
                instrument: 'NEO/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'OMGUSD',
                instrument: 'OMG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.002,
            target_spread: 0.006,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'SOLUSD',
                instrument: 'SOL/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.015,
            target_spread: 0.019,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'TRXUSD',
                instrument: 'TRX/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.00008,
            target_spread: 0.00015,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'UNIUSD',
                instrument: 'UNI/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.0054,
            target_spread: 0.0091,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XLMUSD',
                instrument: 'XLM/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1000,
            minimum_spread: 0.00011,
            target_spread: 0.00015,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.03,
            swap_short: -0.03,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XMRUSD',
                instrument: 'XMR/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.139,
            target_spread: 0.277,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XRPUSD',
                instrument: 'XRP/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0002,
            target_spread: 0.0006,
            max_effective_leverage: 2,
            margin_requirement: 50.0,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XTZUSD',
                instrument: 'XTZ/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.00086,
            target_spread: 0.00506,
            max_effective_leverage: 60,
            margin_requirement: 1.67,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ZECUSD',
                instrument: 'ZEC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.051,
            target_spread: 0.072,
            max_effective_leverage: 60,
            margin_requirement: 1.67,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
    ],
}
export default crypto_specification