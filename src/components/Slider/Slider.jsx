import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { sliderData } from 'data/sliderData';

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
            {sliderData.map(({ id, img, alt, title, description, date }) => {
                return (
                    <SwiperSlide key={id} className="slider__card">
                        <img className="slider__img" src={img} alt={alt} />
                        <div className="slider__card-info-box">
                            <div className="slider__title-wrapper">
                                <h3 className="slider__title">{title}</h3>
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
                                    {description}
                                </p>
                                <p className="slider__date">{date}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
