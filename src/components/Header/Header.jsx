import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import headerLogo from 'assets/images/header/logo.png';

import styles from './Header.module.scss';
const { header, headerBody, headerLogoLink, logo } = styles;

export function Header() {
    return (
        <header className={header}>
            <div className="container">
                <div className={headerBody}>
                    <a className={headerLogoLink} href="./">
                        <img className={logo} src={headerLogo} alt="logo" />
                    </a>
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
}
