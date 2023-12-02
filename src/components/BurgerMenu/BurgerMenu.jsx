import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import { findHeaderHeight } from 'helpers';

import {
    MenuIcon,
    CloseIcon,
    ArrowIcon,
    InstagramIcon,
    FacebookIcon,
} from 'assets/images/header/icons';

import styles from './BurgerMenu.module.scss';
const {
    headerMenu,
    menuBtn,
    menuIcon,
    menuBody,
    menuBodyActive,
    menuContainer,
    menuBox,
    menuBoxActive,
    closeBtn,
    closeBtnText,
    closeIcon,
    menuList,
    menuItem,
    menuLink,
    arrowIcon,
    socialList,
    socialItem,
    socialLink,
    socialIcon,
} = styles;

const arrOfSection = ['Main', 'Values', 'Cases', 'FAQ', 'Contact Us'];

export function BurgerMenu() {
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(() => findHeaderHeight());

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });

    useEffect(() => {
        setHeaderHeight(findHeaderHeight());
    }, [headerHeight, isMobile, isTablet, isDesktop]);

    function handleMenuClick(e) {
        setIsMenuShown(prev => !prev);
        document.body.classList.toggle('_lock');
    }

    return (
        <div className={headerMenu}>
            <button type="button" onClick={handleMenuClick} className={menuBtn}>
                <MenuIcon className={menuIcon} />
            </button>
            <nav
                className={
                    isMenuShown
                        ? `${menuBody} ${menuBodyActive}`
                        : `${menuBody}`
                }
            >
                <div className={`${menuContainer} container`}>
                    <div
                        className={
                            isMenuShown
                                ? `${menuBox} ${menuBoxActive}`
                                : menuBox
                        }
                    >
                        <button
                            type="button"
                            onClick={handleMenuClick}
                            className={closeBtn}
                        >
                            <CloseIcon className={closeIcon} />
                            <span className={closeBtnText}>close</span>
                        </button>
                        <ul className={menuList}>
                            {arrOfSection.map(title => {
                                return (
                                    <li key={title} className={menuItem}>
                                        <Link
                                            onClick={handleMenuClick}
                                            to={title}
                                            className={menuLink}
                                            smooth={true}
                                            offset={Number(`-${headerHeight}`)}
                                            duration={500}
                                        >
                                            <span>{title}</span>
                                            <ArrowIcon className={arrowIcon} />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className={socialList}>
                            <li className={socialItem}>
                                <a className={socialLink} href="./">
                                    <FacebookIcon className={socialIcon} />
                                </a>
                            </li>
                            <li className={socialItem}>
                                <a className={socialLink} href="./">
                                    <InstagramIcon className={socialIcon} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
