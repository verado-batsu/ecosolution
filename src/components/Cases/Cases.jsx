import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import firstCardImgMobile from 'assets/images/cases/firstSliderImgMobile.jpg';
// import firstCardImgTablet from 'assets/images/cases/firstSliderImgTablet.jpg';
// import firstCardImgDesktop from 'assets/images/cases/firstSliderImgDesktop.jpg';

import { ReactComponent as TopRightArrowIcon } from 'assets/images/cases/icons/arrow-top-right.svg';
import { ReactComponent as RightArrowIcon } from 'assets/images/cases/icons/arrow-right.svg';
import { ReactComponent as LeftArrowIcon } from 'assets/images/cases/icons/arrow-left.svg';

import styled from './Cases.module.scss';
const {
    cases,
    casesWrapper,
    casesTitle,
    casesNavigateWrapper,
    counterOfSlides,
    arrowsOfSlider,
    navigateSliderBtn,
    leftArrowIcon,
    rightArrowIcon,
    // sliderWrapper,
    // sliderCard,
    sliderImg,
    sliderCardInfoBox,
    sliderTitleWrapper,
    sliderTitle,
    sliderBtn,
    sliderCardIcon,
    sliderDescrWrapper,
    sliderInfoDescr,
    sliderDate,
} = styled;

export function Cases() {
    return (
        <section name="Cases" className={cases}>
            <div className="container">
                <div className={casesWrapper}>
                    <h2 className={casesTitle}>
                        Successful cases of our company
                    </h2>
                    <div className={casesNavigateWrapper}>
                        <div className={`${counterOfSlides} pagination`}></div>
                        <div className={arrowsOfSlider}>
                            <button className={`${navigateSliderBtn} prev`}>
                                <LeftArrowIcon className={leftArrowIcon} />
                            </button>
                            <button className={`${navigateSliderBtn} next`}>
                                <RightArrowIcon className={rightArrowIcon} />
                            </button>
                        </div>
                    </div>
                </div>

                <Swiper
                    style={{ width: 320 }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.next',
                        prevEl: '.prev',
                    }}
                    pagination={{
                        el: '.pagination',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                            console.log(current, '/', total);
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
                    <SwiperSlide>
                        <img
                            className={sliderImg}
                            src={firstCardImgMobile}
                            alt="beautiful view wind turbines, grass covered field, captured holland"
                        />
                        <div className={sliderCardInfoBox}>
                            <div className={sliderTitleWrapper}>
                                <h3 className={sliderTitle}>
                                    Lviv Region, Radekhiv town Private
                                    Enterprise “ZAKHIDNYI BUH”
                                </h3>
                                <button className={sliderBtn} type="button">
                                    <TopRightArrowIcon
                                        className={sliderCardIcon}
                                    />
                                </button>
                            </div>
                            <div className={sliderDescrWrapper}>
                                <p className={sliderInfoDescr}>
                                    Wind Power for auto field irrigation
                                </p>
                                <p className={sliderDate}>July 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={sliderImg}
                            src={firstCardImgMobile}
                            alt="beautiful view wind turbines, grass covered field, captured holland"
                        />
                        <div className={sliderCardInfoBox}>
                            <div className={sliderTitleWrapper}>
                                <h3 className={sliderTitle}>
                                    Lviv Region, Radekhiv town Private
                                    Enterprise “ZAKHIDNYI BUH”
                                </h3>
                                <button className={sliderBtn} type="button">
                                    <TopRightArrowIcon
                                        className={sliderCardIcon}
                                    />
                                </button>
                            </div>
                            <div className={sliderDescrWrapper}>
                                <p className={sliderInfoDescr}>
                                    Wind Power for auto field irrigation
                                </p>
                                <p className={sliderDate}>July 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={sliderImg}
                            src={firstCardImgMobile}
                            alt="beautiful view wind turbines, grass covered field, captured holland"
                        />
                        <div className={sliderCardInfoBox}>
                            <div className={sliderTitleWrapper}>
                                <h3 className={sliderTitle}>
                                    Lviv Region, Radekhiv town Private
                                    Enterprise “ZAKHIDNYI BUH”
                                </h3>
                                <button className={sliderBtn} type="button">
                                    <TopRightArrowIcon
                                        className={sliderCardIcon}
                                    />
                                </button>
                            </div>
                            <div className={sliderDescrWrapper}>
                                <p className={sliderInfoDescr}>
                                    Wind Power for auto field irrigation
                                </p>
                                <p className={sliderDate}>July 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={sliderImg}
                            src={firstCardImgMobile}
                            alt="beautiful view wind turbines, grass covered field, captured holland"
                        />
                        <div className={sliderCardInfoBox}>
                            <div className={sliderTitleWrapper}>
                                <h3 className={sliderTitle}>
                                    Lviv Region, Radekhiv town Private
                                    Enterprise “ZAKHIDNYI BUH”
                                </h3>
                                <button className={sliderBtn} type="button">
                                    <TopRightArrowIcon
                                        className={sliderCardIcon}
                                    />
                                </button>
                            </div>
                            <div className={sliderDescrWrapper}>
                                <p className={sliderInfoDescr}>
                                    Wind Power for auto field irrigation
                                </p>
                                <p className={sliderDate}>July 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={sliderImg}
                            src={firstCardImgMobile}
                            alt="beautiful view wind turbines, grass covered field, captured holland"
                        />
                        <div className={sliderCardInfoBox}>
                            <div className={sliderTitleWrapper}>
                                <h3 className={sliderTitle}>
                                    Lviv Region, Radekhiv town Private
                                    Enterprise “ZAKHIDNYI BUH”
                                </h3>
                                <button className={sliderBtn} type="button">
                                    <TopRightArrowIcon
                                        className={sliderCardIcon}
                                    />
                                </button>
                            </div>
                            <div className={sliderDescrWrapper}>
                                <p className={sliderInfoDescr}>
                                    Wind Power for auto field irrigation
                                </p>
                                <p className={sliderDate}>July 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
