import React from 'react'
import mt5Icon from '../../images/svg/dtrader/mt5.svg'
import dtIcon from '../../images/svg/dtrader/dt-icosn.svg'
import goIcon from '../../images/svg/dtrader/go-icon.svg'
import ezIcon from '../../images/svg/dtrader/ez-icon.svg'
import dxIcon from '../../images/svg/dtrader/dx-icon.svg'
import dbIcon from '../../images/svg/dtrader/db-icon.svg'
import GenericCarousel from 'components/custom/carousel/_platforms-carousel'

const OurPlatforms = () => {
    const carouselData = [
        {
            icon: mt5Icon,
            heading: 'Deriv MT5',
            paragraph: 'The all-in-one CFD trading platform.',
            link: '/dmt5/',
        },
        {
            icon: goIcon,
            heading: 'Deriv GO',
            paragraph: 'Our best trading experience on your mobile.',
            link: '/deriv-go/',
        },
        {
            icon: dxIcon,
            heading: 'Deriv X',
            paragraph: 'The CFD trading platform to fit your style.',
            link: '/derivx/',
        },
        {
            icon: dtIcon,
            heading: 'Deriv Trader',
            paragraph: 'Our flagship app for trading options and multipliers.',
            link: '/dtrader/',
        },
        {
            icon: ezIcon,
            heading: 'Deriv EZ',
            paragraph: 'Our mobile-first CFD trading platform.',
            link: '/derivez/',
        },
        {
            icon: dbIcon,
            heading: 'Deriv Bot',
            paragraph: 'Automate your trading. No coding required.',
            link: '/dbot/',
        },
    ]
    return (
        <>
            <GenericCarousel
                renderableData={carouselData}
                mainHeading="Check out ours other platforms"
            />
        </>
    )
}

export default OurPlatforms