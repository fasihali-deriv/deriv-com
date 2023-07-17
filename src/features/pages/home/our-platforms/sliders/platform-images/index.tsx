import React from 'react'
import { Controller, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { SmartPlatformItem } from '../../types'
import { platform_images_swiper, platform_slider_pagination } from './platform-images.module.scss'
import PlatformImageItem from './platform-image.item'
import { get_lang_direction } from 'components/localization'

interface PlatformMainSliderProps {
    items: SmartPlatformItem[]
    setSwiper: (swiper: SwiperType) => void
    connectedSwiper: SwiperType
}

const PlatformImageSlider = ({ items, setSwiper, connectedSwiper }: PlatformMainSliderProps) => {
    return (
        <Swiper
            speed={800}
            effect={'fade'}
            slidesPerView={1}
            fadeEffect={{
                crossFade: true,
            }}
            onSwiper={setSwiper}
            controller={{
                control: connectedSwiper,
            }}
            dir={get_lang_direction()}
            modules={[Controller, EffectFade, Autoplay, Pagination]}
            autoplay={{
                delay: 4000,
            }}
            className={platform_images_swiper}
            pagination={{
                enabled: true,
                type: 'bullets',
                horizontalClass: platform_slider_pagination,
                clickable: true,
            }}
            breakpoints={{
                992: {
                    pagination: {
                        enabled: false,
                        type: 'bullets',
                        horizontalClass: platform_slider_pagination,
                        clickable: true,
                    },
                },
            }}
        >
            {items.map(({ id, data }, index) => (
                <SwiperSlide key={id} data-swiper-autoplay={index === 0 ? '5000' : '4000'}>
                    <PlatformImageItem item={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PlatformImageSlider
