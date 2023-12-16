import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import { findHeaderHeight } from 'helpers';

import {
    ArrowUpIcon,
    FacebookIcon,
    InstagramIcon,
    LogoIcon,
} from 'assets/images/footer/icons';

import styles from './Footer.module.scss';
const {
    footer,
    footerBody,
    footerTop,
    footerLogoLink,
    logo,
    logoTitle,
    logoPreTitle,
    greenLogoPreTitle,
    footerUp,
    footerArrowUpIcon,
    footerSocialList,
    footerSocialItem,
    footerSocialLink,
    footerSocialIcon,
    footerLinkList,
    footerLinkItem,
    footerLink,
    footerCopy,
} = styles;

export function Footer() {
    const [headerHeight, setHeaderHeight] = useState(() => findHeaderHeight());

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });

    useEffect(() => {
        setHeaderHeight(findHeaderHeight());
    }, [headerHeight, isMobile, isTablet, isDesktop]);

    return (
        <section className={footer}>
            <div className="container">
                <div className={footerBody}>
                    <div className={footerTop}>
                        <a className={footerLogoLink} href="./">
                            <LogoIcon className={logo} alt="logo" />
                            <p className={logoTitle}>ecosolution</p>
                            <div className={logoPreTitle}>
                                <p>
                                    <span className={greenLogoPreTitle}>
                                        GREEN
                                    </span>
                                    ERGY
                                </p>
                                <p>FOR LIFE</p>
                            </div>
                        </a>
                        {isTablet || isDesktop ? (
                            <ul className={footerSocialList}>
                                <li className={footerSocialItem}>
                                    <a
                                        aria-label="open facebook"
                                        className={footerSocialLink}
                                        href="."
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                    >
                                        <FacebookIcon
                                            className={footerSocialIcon}
                                        />
                                    </a>
                                </li>
                                <li className={footerSocialItem}>
                                    <a
                                        aria-label="open instargam"
                                        className={footerSocialLink}
                                        href="."
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                    >
                                        <InstagramIcon
                                            className={footerSocialIcon}
                                        />
                                    </a>
                                </li>
                            </ul>
                        ) : (
                            ''
                        )}
                        <Link
                            to="Main"
                            className={footerUp}
                            smooth={true}
                            offset={Number(`-${headerHeight}`)}
                            duration={500}
                        >
                            <ArrowUpIcon className={footerArrowUpIcon} />
                        </Link>
                    </div>
                    {isMobile && (
                        <ul className={footerSocialList}>
                            <li className={footerSocialItem}>
                                <a
                                    aria-label="open facebook"
                                    className={footerSocialLink}
                                    href="."
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <FacebookIcon
                                        className={footerSocialIcon}
                                    />
                                </a>
                            </li>
                            <li className={footerSocialItem}>
                                <a
                                    aria-label="open instargam"
                                    className={footerSocialLink}
                                    href="."
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <InstagramIcon
                                        className={footerSocialIcon}
                                    />
                                </a>
                            </li>
                        </ul>
                    )}

                    <ul className={footerLinkList}>
                        <li className={footerLinkItem}>
                            <a
                                className={footerLink}
                                href="https://maps.app.goo.gl/4wEMGGNfCrechPkS6"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                            </a>
                        </li>
                        <li className={footerLinkItem}>
                            <a
                                className={footerLink}
                                href="mailto:office@ecosolution.com"
                            >
                                office@ecosolution.com
                            </a>
                        </li>
                        <li className={footerLinkItem}>
                            <p className={footerCopy}>
                                ecosolution &copy; 2023
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
