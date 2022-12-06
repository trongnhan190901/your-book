import { memo } from 'react';
import Slide1 from '~/components/shared/Slide1';
import Slide2 from '~/components/shared/Slide2';
import Slide3 from '~/components/shared/Slide3';
import Slide4 from '~/components/shared/Slide4';

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 5000 }}
                loop={true}
                speed={1200}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <Slide1 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide3 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide4 />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default memo(Banner);
