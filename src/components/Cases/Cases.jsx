import { Slider } from 'components/Slider/Slider';

import { ReactComponent as RightArrowIcon } from 'assets/images/cases/icons/arrow-right.svg';
import { ReactComponent as LeftArrowIcon } from 'assets/images/cases/icons/arrow-left.svg';

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
                            <button className={`${navigateSliderBtn} prev`}>
                                <LeftArrowIcon className={leftArrowIcon} />
                            </button>
                            <button className={`${navigateSliderBtn} next`}>
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
