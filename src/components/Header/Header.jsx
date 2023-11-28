import { ReactComponent as HeaderLogo } from '../../assets/images/header/logo.svg';

import styles from './Header.module.scss';
const { header, headerLogo } = styles;

export function Header() {
    return (
        <header className={header}>
            <div className="container">
                <div className="headerBody">
                    <a className="headerLogoLink" href="../../App.jsx">
                        <div className="logo">
                            <HeaderLogo className={headerLogo} />
                            <p className="logoTitle">ecosolution</p>
                            <p className="logoPreTitle">
                                <span className="logoGreenPreTitle">GREEN</span>
                                ERGY FOR LIFE
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
}
