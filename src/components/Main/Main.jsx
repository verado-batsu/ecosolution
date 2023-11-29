import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { findHeaderHeight } from 'helpers/findHeaderHeight';
import { ReactComponent as ArrowIcon } from 'assets/images/main/arrow-right.svg';
import windTurbine from 'assets/images/main/windTurbine.jpg';
import windTurbine2x from 'assets/images/main/windTurbine@2x.jpg';

import styles from './Main.module.scss';
const {
    main,
    mainTopWrapper,
    mainTitle,
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
    windTurbineImg,
} = styles;

export function Main() {
    const [headerHeight, setHeaderHeight] = useState(() => findHeaderHeight());

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });

    useEffect(() => {
        setHeaderHeight(findHeaderHeight());
    }, [headerHeight, isMobile, isTablet, isDesktop]);

    return (
        <section name="Main" className={main}>
            <div className="container">
                <div className={mainTopWrapper}>
                    <h1 className={mainTitle}>RENEWABLE ENERGY For any task</h1>
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
                    <img
                        className={windTurbineImg}
                        srcSet={`${windTurbine} 1x, ${windTurbine2x} 2x`}
                        src={windTurbine}
                        alt="wind turbine clean energy"
                    />
                </div>
            </div>
        </section>
    );
}
