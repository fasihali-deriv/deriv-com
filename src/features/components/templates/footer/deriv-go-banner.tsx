import React from 'react'
import { CaptionText, Heading, Text } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { DerivProductDerivGoBrandLightLogoHorizontalIcon } from '@deriv/quill-icons/Logo'
import { StaticImage } from 'gatsby-plugin-image'
import DownloadBadges from './download'
import { Localize, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { isFeatureEnabled } from 'common/utility'

export const DerivGoBanner = () => {
    const { is_row } = useRegion()
    const showQR =
        isFeatureEnabled('derivGOApps.appGallery') &&
        isFeatureEnabled('derivGOApps.android') &&
        isFeatureEnabled('derivGOApps.appStore')
    return (
        <div className="flex flex-col gap-gap-lg">
            {is_row && (
                <div className="flex lg:flex-col gap-gap-lg rounded-[16px] border-solid border-xs border-opacity-black-100 p-general-md">
                    <div className="flex flex-col gap-gap-md max-lg:flex-1 max-lg:justify-center">
                        <div className="flex flex-col gap-gap-md">
                            <div className="flex items-center gap-gap-md">
                                <DerivProductDerivGoBrandLightLogoHorizontalIcon
                                    width={24}
                                    height={24}
                                />
                                <Heading.H5 aria-level={3}>
                                    <Localize translate_text="_t_Deriv GO_t_" />
                                </Heading.H5>
                            </div>
                            <Text size="sm">
                                <Localize translate_text="_t_Trade multipliers on our mobile app._t_" />
                            </Text>
                        </div>
                        {showQR && (
                            <div className="block max-sm:hidden">
                                <div className="flex items-center gap-gap-md rounded-[8px] border-solid border-xs border-opacity-black-100 p-general-sm">
                                    <StaticImage
                                        src="../../../../images/common/migration/footer/deriv-go-qr.png"
                                        alt={localize('_t_download deriv-go_t_')}
                                        height={64}
                                        width={64}
                                        placeholder="none"
                                    />
                                    <CaptionText className="text-typography-default">
                                        <Localize translate_text="_t_Scan to download_t_" />
                                    </CaptionText>
                                </div>
                            </div>
                        )}
                    </div>
                    <DownloadBadges />
                </div>
            )}
        </div>
    )
}
