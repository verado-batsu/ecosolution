import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { findHeaderHeight } from 'helpers';

import { ReactComponent as ArrowIcon } from 'assets/images/main/icons/arrow-right.svg';
import {
    windTurbine,
    windTurbine2x,
    windTurbineDesktop,
    windTurbineDesktop2x,
} from 'assets/images/main';

import styles from './Main.module.scss';
const {
    main,
    mainContainer,
    mainTopWrapper,
    mainTitle,
    preTitleWrapper,
    mainPreTitle,
    mainBtnWrapper,
    learnMoreBtn,
    mainArrowWrapper,
    mainArrowIcon,
    mainBottomWrapper,
    addressWrapper,
    physAddress,
    mailAddress,
    mainCopy,
    mainImgWrapper,
    windTurbineImg,
} = styles;

export function Main() {
    const [headerHeight, setHeaderHeight] = useState(() => findHeaderHeight());
    const [mainPaddingTop, setMainPaddingTop] = useState(headerHeight + 110);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });

    useEffect(() => {
        setHeaderHeight(findHeaderHeight());
    }, [headerHeight, isMobile, isTablet, isDesktop]);

    useEffect(() => {
        if (isMobile) {
            setMainPaddingTop(headerHeight + 110);
        } else if (isTablet) {
            setMainPaddingTop(headerHeight + 128);
        } else {
            setMainPaddingTop(headerHeight + 176);
        }
    }, [headerHeight, isMobile, isTablet, isDesktop]);

    return (
        <section
            name="Main"
            className={main}
            style={{ paddingTop: mainPaddingTop }}
        >
            <div className={`container ${mainContainer}`}>
                <div className={mainTopWrapper}>
                    <h1 className={mainTitle}>RENEWABLE ENERGY For any task</h1>
                    <div className={preTitleWrapper}>
                        <p className={mainPreTitle}>
                            Development and implementation of renewable
                            non-polluting energy sources, generating power
                            generation using energy wind, sun, water, biomass
                        </p>
                        <div className={mainBtnWrapper}>
                            <Link
                                to="Cases"
                                className={learnMoreBtn}
                                smooth={true}
                                offset={Number(`-${headerHeight}`)}
                                duration={500}
                            >
                                <span>Learn more</span>
                                <div className={mainArrowWrapper}>
                                    <ArrowIcon className={mainArrowIcon} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={mainBottomWrapper}>
                    <p className={addressWrapper}>
                        <span className={physAddress}>
                            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                        </span>
                        <span className={mailAddress}>
                            office@ecosolution.com
                        </span>
                        <span className={mainCopy}>
                            ecosolution &copy; 2023
                        </span>
                    </p>
                    <div className={mainImgWrapper}>
                        {isDesktop ? (
                            <img
                                className={windTurbineImg}
                                srcSet={`${windTurbineDesktop} 1x, ${windTurbineDesktop2x} 2x`}
                                src={windTurbineDesktop}
                                alt="wind turbine clean energy"
                            />
                        ) : (
                            <img
                                className={windTurbineImg}
                                srcSet={`${windTurbine} 1x, ${windTurbine2x} 2x`}
                                src={windTurbine}
                                alt="wind turbine clean energy"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
