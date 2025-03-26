import React, { useEffect, useState } from "react";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Pagination } from "swiper/modules";

import Image from 'next/image';
import t1 from '../app/images/t1.png';
import t2 from '../app/images/t2.png';
import t3 from '../app/images/t3.png';

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
    return (
        <div>
            <div className='testimonial-section'>
                <div className='lg-container'>
                    <div className='left-heading'>
                        <h1>
                            Testimonials
                        </h1>
                        <p>
                            There are many variations of passages of lorem ipsum that available but the majority have alteration
                            in some form by injected humour passages of lorem but the majority have alteration.
                        </p>
                    </div>
                    <Swiper
                        spaceBetween={48}
                        // navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1320: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        <SwiperSlide className="cursor-pointer">
                            <div className="testimonial-card">
                                <div className="profile">
                                    <Image
                                        src={t1}
                                        alt="Description of image"
                                    />
                                    <div>
                                        <h5>
                                            Jeo Rogan
                                        </h5>
                                        <h6>
                                            Heart Specialist
                                        </h6>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="cursor-pointer">
                            <div className="testimonial-card">
                                <div className="profile">
                                    <Image
                                        src={t2}
                                        alt="Description of image"
                                    />
                                    <div>
                                        <h5>
                                            Dorehe Angle
                                        </h5>
                                        <h6>
                                            Neurologist
                                        </h6>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="cursor-pointer">
                            <div className="testimonial-card">
                                <div className="profile">
                                    <Image
                                        src={t3}
                                        alt="Description of image"
                                    />
                                    <div>
                                        <h5>
                                            Alexander Graham
                                        </h5>
                                        <h6>
                                            Neurologist
                                        </h6>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="cursor-pointer">
                            <div className="testimonial-card">
                                <div className="profile">
                                    <Image
                                        src={t2}
                                        alt="Description of image"
                                    />
                                    <div>
                                        <h5>
                                            Dorehe Angle
                                        </h5>
                                        <h6>
                                            Neurologist
                                        </h6>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
