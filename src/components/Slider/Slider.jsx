import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { limit } from 'helpers';

import { firstCardImgDesktop, secondCardImgDesktop } from 'assets/images/cases';

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
                    src={firstCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            {limit(
                                'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
                                40
                            )}
                        </h3>
                        <button className="slider__btn" type="button">
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">
                            {limit('Wind Power for auto field irrigation', 36)}
                        </p>
                        <p className="slider__date">July 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={secondCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            {limit(
                                'Zhytomyr city Private Enterprise “Bosch”',
                                40
                            )}
                        </h3>
                        <button className="slider__btn" type="button">
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">
                            {limit('Solar Panels for industrial use', 36)}
                        </p>
                        <p className="slider__date">November 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={firstCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            {limit(
                                'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
                                40
                            )}
                        </h3>
                        <button className="slider__btn" type="button">
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">
                            {limit('Wind Power for auto field irrigation', 36)}
                        </p>
                        <p className="slider__date">July 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={secondCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            {limit(
                                'Zhytomyr city Private Enterprise “Bosch”',
                                40
                            )}
                        </h3>
                        <button className="slider__btn" type="button">
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">
                            {limit('Solar Panels for industrial use', 36)}
                        </p>
                        <p className="slider__date">November 2023</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider__card">
                <img
                    className="slider__img"
                    src={firstCardImgDesktop}
                    alt="beautiful view wind turbines, grass covered field, captured holland"
                />
                <div className="slider__card-info-box">
                    <div className="slider__title-wrapper">
                        <h3 className="slider__title">
                            {limit(
                                'Zhytomyr city Private Enterprise “Bosch”',
                                40
                            )}
                        </h3>
                        <button className="slider__btn" type="button">
                            <TopRightArrowIcon className="slider__card-icon" />
                        </button>
                    </div>
                    <div className="slider__descr-wrapper">
                        <p className="slider__info-descr">
                            {limit('Solar Panels for industrial use', 36)}
                        </p>
                        <p className="slider__date">November 2023</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
