import { useState } from 'react';

import { ReactComponent as MenuIcon } from 'assets/images/header/menu.svg';
import { ReactComponent as CloseIcon } from 'assets/images/header/close.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/header/arrow-right.svg';
import { ReactComponent as InstagramIcon } from 'assets/images/header/instagram.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/header/facebook.svg';

import styles from './BurgerMenu.module.scss';
const {
    headerMenu,
    menuBtn,
    menuIcon,
    menuBody,
    menuBodyActive,
    menuBox,
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
    facebookIcon,
} = styles;

export function BurgerMenu() {
    const [isMenuShown, setIsMenuShown] = useState(false);

    function handleMenuClick(e) {
        setIsMenuShown(prev => !prev);
    }

    return (
        <div className={headerMenu}>
            <button onClick={handleMenuClick} className={menuBtn}>
                <MenuIcon className={menuIcon} />
            </button>
            <nav
                className={
                    isMenuShown ? `${menuBody} ${menuBodyActive}` : menuBody
                }
            >
                <div className="container">
                    <div className={menuBox}>
                        <button onClick={handleMenuClick} className={closeBtn}>
                            <CloseIcon className={closeIcon} />
                            <span className={closeBtnText}>close</span>
                        </button>
                        <ul className={menuList}>
                            <li className={menuItem}>
                                <a className={menuLink} href="./">
                                    <span>Main</span>
                                    <ArrowIcon className={arrowIcon} />
                                </a>
                            </li>
                            <li className={menuItem}>
                                <a className={menuLink} href="./">
                                    <span>About</span>
                                    <ArrowIcon className={arrowIcon} />
                                </a>
                            </li>
                            <li className={menuItem}>
                                <a className={menuLink} href="./">
                                    <span>Service</span>
                                    <ArrowIcon className={arrowIcon} />
                                </a>
                            </li>
                            <li className={menuItem}>
                                <a className={menuLink} href="./">
                                    <span>Cases</span>
                                    <ArrowIcon className={arrowIcon} />
                                </a>
                            </li>
                            <li className={menuItem}>
                                <a className={menuLink} href="./">
                                    <span>FAQ</span>
                                    <ArrowIcon className={arrowIcon} />
                                </a>
                            </li>
                            <li className={menuItem}>
                                <a className={menuLink} href="./">
                                    <span>Customers</span>
                                    <ArrowIcon className={arrowIcon} />
                                </a>
                            </li>
                            <li className={menuItem}>
                                <a className={menuLink} href="./">
                                    <span>Contact Us</span>
                                    <ArrowIcon className={arrowIcon} />
                                </a>
                            </li>
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
