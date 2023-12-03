import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { limit } from 'helpers';

import {
    firstCardImg,
    secondCardImg,
    thirdCardImg,
    fourthCardImg,
    fifthCardImg,
} from 'assets/images/cases';

import { TopRightArrowIcon } from 'assets/images/cases/icons';

import './Slider.scss';

export function Slider() {
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
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={firstCardImg}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            'Lviv Region, Radekhiv town Private Enterprise
                            “ZAKHIDNYI BUH”'
                        </h3>
                        <button
                            aria-label="open article"
                            className="slider__btn"
                            type="button"
                        >
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">
                            'Wind Power for auto field irrigation'
                        </p>
                        <p className="slider__date">July 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={secondCardImg}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            'Zhytomyr city Private Enterprise “Bosch”'
                        </h3>
                        <button
                            aria-label="open article"
                            className="slider__btn"
                            type="button"
                        >
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">
                            'Solar Panels for industrial use'
                        </p>
                        <p className="slider__date">November 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={thirdCardImg}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            Rivne city Private Enterprise “Biotech”
                        </h3>
                        <button
                            aria-label="open article"
                            className="slider__btn"
                            type="button"
                        >
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">Thermal modules</p>
                        <p className="slider__date">October 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={fourthCardImg}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            Kherson city Private Enterprise “HealthyFarm”
                        </h3>
                        <button
                            aria-label="open article"
                            className="slider__btn"
                            type="button"
                        >
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">Wind power</p>
                        <p className="slider__date">September 2021</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={fifthCardImg}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            Zaporizhia city Private Enterprise “Biotech”
                        </h3>
                        <button
                            aria-label="open article"
                            className="slider__btn"
                            type="button"
                        >
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">
                            Mini nuclear stations
                        </p>
                        <p className="slider__date">May 2021</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
