import { Slider } from 'components/Slider/Slider';

import { RightArrowIcon, LeftArrowIcon } from 'assets/images/cases/icons';

import styles from './Cases.module.scss';
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
} = styles;

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
                            <button
                                aria-label="previous slide"
                                className={`${navigateSliderBtn} prev`}
                            >
                                <LeftArrowIcon className={leftArrowIcon} />
                            </button>
                            <button
                                aria-label="next slide"
                                className={`${navigateSliderBtn} next`}
                            >
                                <RightArrowIcon className={rightArrowIcon} />
                            </button>
                        </div>
                    </div>
                </div>
                <Slider />
            </div>
        </section>
    );
}
