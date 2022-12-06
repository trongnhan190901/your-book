import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookCard from '~/components/shared/BookCard';
import { FeaturedBookItems } from '~/constants';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const FeaturedBook = () => {
    return (
        <>
            <div className="absolute-center full-size flex-col">
                <h1 className="mb-6 text-center font-tertiary text-7xl lg:mb-10 lg:text-8xl">
                    Sách nổi bật
                </h1>
                <div className="absolute-center h-fit w-[90%] lg:my-6">
                    <Swiper
                        modules={[
                            Navigation,
                            Pagination,
                            Autoplay,
                            Scrollbar,
                            A11y,
                        ]}
                        spaceBetween={0}
                        slidesPerView="auto"
                        navigation
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        speed={1200}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                            1536: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {FeaturedBookItems.map((item, index) => {
                            return (
                                <SwiperSlide key={index} virtualIndex={index}>
                                    <div className="absolute-center mb-20 h-fit">
                                        <BookCard product={item} />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="absolute-center w-full cursor-pointer justify-end hover:underline hover:underline-offset-4 ">
                    {/* <Link href="#"> */}
                    <span className="mr-2 font-secondary text-3xl font-semibold">
                        Xem cửa hàng
                    </span>
                    <ArrowLongRightIcon className="w-8" />

                    {/* </Link> */}
                </div>
            </div>
        </>
    );
};
export default FeaturedBook;
