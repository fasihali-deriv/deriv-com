import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets, TMarketData, TMarketDataResponse } from '../_types'
import useLiveColumns from '../_use-live-columns'
import {
    Spinner,
    TableLoadingContainer,
    Table,
    TableContainer,
    TableRow,
    StyledContainer,
    ContainerWrapper,
} from './_elements'
import { useDerivApi } from 'components/hooks/use-deriv-api'
import useRegion from 'components/hooks/use-region'
import { LocalizedLinkText } from 'components/elements'

export type TLiveMarketTableProps = {
    market: TAvailableLiveMarkets
    to: string
    display_name: string
}

const LiveMarketTable = ({ market, to, display_name }: TLiveMarketTableProps) => {
    const { is_eu } = useRegion()
    const TABLE_VISIBLE_ROWS = 5
    const [markets_data, setMarketsData] = useState(() => {
        const temp = new Map<TAvailableLiveMarkets, TMarketData[]>()
        return temp
    })

    const [is_loading, setIsLoading] = useState(false)

    const table_data = useMemo(() => {
        const data = markets_data.get(market)

        return data ?? []
    }, [market, markets_data])

    const [sorting, setSorting] = React.useState<SortingState>([])

    const { send } = useDerivApi()

    const region = is_eu ? 'eu' : 'row'

    const requestMarketsData = useCallback(() => {
        setIsLoading(true)
        // Todo: For region: 'row' should be dynamic. Delete this todo once fixed
        send(
            {
                trading_platform_asset_listing: 1,
                platform: 'mt5',
                type: 'brief',
                region: region,
                subscribe: 1,
            },
            (response: TMarketDataResponse) => {
                if (!response.error) {
                    const responseData = [...response.trading_platform_asset_listing?.mt5.assets]
                    const markets = new Map<TAvailableLiveMarkets, TMarketData[]>()

                    responseData.forEach((item) => {
                        const market = item.market == 'stocks' ? 'indices' : item.market

                        if (!markets.has(market)) {
                            markets.set(market, [item])
                        } else {
                            markets.get(market).push(item)
                        }
                    })
                    setMarketsData(markets)
                    setIsLoading(false)
                }
            },
        )
    }, [])
    const columns = useLiveColumns(requestMarketsData)

    const table = useReactTable({
        data: table_data,
        columns,
        state: {
            sorting,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
    })

    useEffect(() => {
        requestMarketsData()
    }, [requestMarketsData])

    const rows = table.getRowModel().rows.slice(0, TABLE_VISIBLE_ROWS)

    return (
        <>
            <ContainerWrapper>
                <TableContainer>
                    <Table>
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id} bg="var(--color-white-1)">
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef.header,
                                                      header.getContext(),
                                                  )}
                                        </th>
                                    ))}
                                </TableRow>
                            ))}
                        </thead>
                        <tbody>
                            {is_loading && (
                                <TableLoadingContainer>
                                    <Spinner />
                                </TableLoadingContainer>
                            )}
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </TableContainer>
            </ContainerWrapper>
            <StyledContainer>
                <LocalizedLinkText to={to}>
                    See all {display_name.toLocaleLowerCase()} market {'>'}
                </LocalizedLinkText>
            </StyledContainer>
        </>
    )
}

export default LiveMarketTable