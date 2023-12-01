// import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import firstCardImgDesktop from 'assets/images/cases/firstSliderImgDesktop.jpg';
import secondCardImgDesktop from 'assets/images/cases/secondSliderImgDesktop.jpg';

import { ReactComponent as TopRightArrowIcon } from 'assets/images/cases/icons/arrow-top-right.svg';

import './Slider.scss';
import { limit } from 'helpers/limit';

export function Slider() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView="auto"
            loop={true}
            navigation={{
                nextEl: '.next',
                prevEl: '.prev',
            }}
            pagination={{
                el: '.pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    if (current < 10) {
                        current = `0${current}`;
                    }
                    if (total < 10) {
                        total = `0${total}`;
                    }
                    return `
						${current}
						<span>
							/${total}
						</span>
						
					`;
                },
            }}
        >
            <SwiperSlide className="slider-card">
                <img
                    className="slider-img"
                    src={firstCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider-card-info-box">
                    <div className="slider-title-wrapper">
                        <h3 className="slider-title">
                            {limit(
                                'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
                                40
                            )}
                        </h3>
                        <button className="slider-btn" type="button">
                            <TopRightArrowIcon className="slider-card-icon" />
                        </button>
                    </div>
                    <div className="slider-descr-wrapper">
                        <p className="slider-info-descr">
                            {limit('Wind Power for auto field irrigation', 36)}
                        </p>
                        <p className="slider-date">July 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider-card">
                <img
                    className="slider-img"
                    src={secondCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider-card-info-box">
                    <div className="slider-title-wrapper">
                        <h3 className="slider-title">
                            {limit(
                                'Zhytomyr city Private Enterprise “Bosch”',
                                40
                            )}
                        </h3>
                        <button className="slider-btn" type="button">
                            <TopRightArrowIcon className="slider-card-icon" />
                        </button>
                    </div>
                    <div className="slider-descr-wrapper">
                        <p className="slider-info-descr">
                            {limit('Solar Panels for industrial use', 36)}
                        </p>
                        <p className="slider-date">November 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider-card">
                <img
                    className="slider-img"
                    src={firstCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider-card-info-box">
                    <div className="slider-title-wrapper">
                        <h3 className="slider-title">
                            {limit(
                                'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
                                40
                            )}
                        </h3>
                        <button className="slider-btn" type="button">
                            <TopRightArrowIcon className="slider-card-icon" />
                        </button>
                    </div>
                    <div className="slider-descr-wrapper">
                        <p className="slider-info-descr">
                            {limit('Wind Power for auto field irrigation', 36)}
                        </p>
                        <p className="slider-date">July 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider-card">
                <img
                    className="slider-img"
                    src={secondCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider-card-info-box">
                    <div className="slider-title-wrapper">
                        <h3 className="slider-title">
                            {limit(
                                'Zhytomyr city Private Enterprise “Bosch”',
                                40
                            )}
                        </h3>
                        <button className="slider-btn" type="button">
                            <TopRightArrowIcon className="slider-card-icon" />
                        </button>
                    </div>
                    <div className="slider-descr-wrapper">
                        <p className="slider-info-descr">
                            {limit('Solar Panels for industrial use', 36)}
                        </p>
                        <p className="slider-date">November 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider-card">
                <img
                    className="slider-img"
                    src={firstCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider-card-info-box">
                    <div className="slider-title-wrapper">
                        <h3 className="slider-title">
                            {limit(
                                'Zhytomyr city Private Enterprise “Bosch”',
                                40
                            )}
                        </h3>
                        <button className="slider-btn" type="button">
                            <TopRightArrowIcon className="slider-card-icon" />
                        </button>
                    </div>
                    <div className="slider-descr-wrapper">
                        <p className="slider-info-descr">
                            {limit('Solar Panels for industrial use', 36)}
                        </p>
                        <p className="slider-date">November 2023</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
