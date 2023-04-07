import React from 'react'
import styled from 'styled-components'
import { SmallContainer, OptionGrid } from '../components/_style'
import Notes from '../components/_notes'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import CommonHeaderSection from 'components/elements/common-header-section'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// SVG
import CrashBoom from 'images/svg/options/crash-boom.svg'
import JumpIndices from 'images/svg/options/jump-indices.svg'
import VolatilityIndices from 'images/svg/options/volatility-indices.svg'
import useRegion from 'components/hooks/use-region'

const MiddleText = styled(Text)`
    margin-bottom: 0.8rem;

    @media ${device.tabletL} {
        margin-bottom: 1.6rem;
    }
`

const AccumulatorsToTrade = () => {
    const { is_eu } = useRegion()
    return (
        <SectionContainer background="white" padding="0 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" type="page-title" mb="4rem">
                    <Localize translate_text="Instruments available for accumulators trading" />
                </Header>
                <IndicesGrid />

                {is_eu && (
                    <Text mt="0.8rem" color="grey-5" size="var(--text-size-xs)">
                        {localize(
                            'Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average.',
                        )}
                    </Text>
                )}
            </SmallContainer>
        </SectionContainer>
    )
}

const IndicesGrid = () => {
    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={CrashBoom} alt="rise fall" />
                </div>
                <CommonHeaderSection
                    title="_t_Crash/Boom indices_t_"
                    title_font_size="1.6rem"
                    margin_title="1.6rem 0 0.8rem 0"
                    font_weight_title="700"
                    line_height="2.4rem"
                />
                <MiddleText>
                    {localize(
                        'Crash/Boom indices mimic markets with sudden price movements, either a sharp drop (crash) or a spike (boom) in prices.',
                    )}
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="These indices are characterised by an average of one crash or boom in a series of 1000, 500, or 300 ticks." />
                </MiddleText>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={JumpIndices} alt="higher lower" />
                </div>
                <CommonHeaderSection
                    title="_t_Jump indices_t_"
                    title_font_size="1.6rem"
                    margin_title="1.6rem 0 0.8rem 0"
                    font_weight_title="700"
                    line_height="2.4rem"
                />
                <MiddleText>
                    {localize(
                        'Jump indices correspond to simulated markets with large, sudden price changes. They have constant volatilities ranging from 10% to 100%.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'On average, there is an equal probability of an up or down jump every 20 minutes, and the jump size is around 30 times the normal price movement.',
                    )}
                </MiddleText>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={VolatilityIndices} alt="higher lower" />
                </div>
                <CommonHeaderSection
                    title="_t_Volatility indices_t_"
                    title_font_size="1.6rem"
                    margin_title="1.6rem 0 1rem 0"
                    font_weight_title="700"
                    line_height="2.4rem"
                />
                <MiddleText>
                    {localize(
                        '_t_Volatility indices correspond to markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%._t_',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        '_t_The frequency of tick generation differs between indices, with some generating ticks every second and others generating them every two seconds._t_',
                    )}
                </MiddleText>
            </Flex>
        </OptionGrid>
    )
}

export default AccumulatorsToTrade