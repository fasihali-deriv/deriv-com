import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Controller, EffectFade } from 'swiper'
import type { Swiper as SwiperType } from 'swiper'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { SmartPlatformItem } from '../../types'
import { platform_swiper, embla_slider } from './platforms-main.module.scss'
import MainSliderItem from './main-slider.item'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { get_lang_direction } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { PLATFORMS_CAROUSEL_DELAY } from 'pages/home/platform-carousel/_utils'
import Flex from 'features/components/atoms/flex-box'
import FlexBoxContainer from 'features/components/atoms/flex-box/box'

interface PlatformMainSliderProps {
    items: SmartPlatformItem[]
    setSwiper: (swiper: SwiperType) => void
    connectedSwiper: SwiperType
}
const carouselOptions: EmblaOptionsType = {
    startIndex: 0,
    loop: false,
    axis: 'y',
    skipSnaps: false,
    draggable: false,
}

const PlatformsMainSlider = ({ items, setSwiper, connectedSwiper }: PlatformMainSliderProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const [slide_index, setSlideIndex] = useState(0)

    const { is_eu } = useRegion()
    const auto_play = useMemo(() => {
        return Autoplay({
            delay: PLATFORMS_CAROUSEL_DELAY,
            playOnInit: !is_eu,
        })
    }, [is_eu])

    const [viewportRef, embla] = useEmblaCarousel(carouselOptions, [auto_play])

    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                setSlideIndex(embla.selectedScrollSnap())
            })
        }
    }, [embla, setSlideIndex])

    // Since the platform_details is changing based on useRegion hook data, we have to reInit the carousel
    // to make it aware of the change.
    useEffect(() => {
        if (embla) {
            embla.reInit(carouselOptions, [auto_play])
        }
    }, [embla, items, auto_play])

    const scrollHandler = useCallback(
        (index) => {
            if (embla) {
                embla.scrollTo(index)
            }
        },
        [embla],
    )

    const clickHandler = (index) => {
        scrollHandler(index)
        setSlideIndex(index)
    }

    return (
        <div className={platform_swiper} ref={viewportRef}>
            <Flex.Box>
                {items.map(({ id, data }) => (
                    <div key={id} className={embla_slider}>
                        <MainSliderItem item={data} onClick={() => clickHandler(slide_index)} />
                    </div>
                ))}
            </Flex.Box>
        </div>
    )
}

export default PlatformsMainSlider
