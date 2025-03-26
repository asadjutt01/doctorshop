import React, { useEffect, useState } from "react";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Pagination } from "swiper/modules";

import Image from 'next/image';
import logo from '../app/images/logo.png';

import "swiper/css";
import "swiper/css/pagination";

export default function Partners() {
    return (
        <div>
            <div className='partners-section'>
                <div className='lg-container'>
                    <div className='center-heading'>
                        <h2>
                            Brand Partners
                        </h2>
                    </div>
                    <Swiper
                        spaceBetween={26}
                        navigation
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            200: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1220: {
                                slidesPerView: 5,
                            },
                            1520: {
                                slidesPerView: 7,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-logo">
                                <Image
                                    src={logo}
                                    alt="Description of image"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
