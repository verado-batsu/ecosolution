import { ContactUsForm } from './ContactUsForm/ContactUsForm';

import {
    PhoneIcon,
    SmsIcon,
    MapIcon,
    FacebookIcon,
    InstagramIcon,
} from 'assets/images/contact-us/icons';

import styles from './ContactUs.module.scss';
const {
    contactUs,
    contactUsTitle,
    contactUsContentWrapper,
    contactSocialList,
    contactSocialItem,
    contactSocialTitle,
    contactSocialLinkWrapper,
    contactLink,
    iconWrapper,
    contactLinkIcon,
    contactSocialLink,
    contactSocialIcon,
} = styles;

export function ContactUs() {
    return (
        <section name="Contact Us" className={contactUs}>
            <div className="container">
                <h2 className={contactUsTitle}>Contact us</h2>
                <div className={contactUsContentWrapper}>
                    <ul className={contactSocialList}>
                        <li className={contactSocialItem}>
                            <h3 className={contactSocialTitle}>Phone:</h3>
                            <div>
                                <a
                                    className={contactLink}
                                    href="tel:+380981234567"
                                >
                                    <div className={iconWrapper}>
                                        <PhoneIcon
                                            className={contactLinkIcon}
                                        />
                                    </div>
                                    <span>38 (098) 12 34 567</span>
                                </a>
                                <a
                                    className={contactLink}
                                    href="tel:+380981234567"
                                >
                                    <div className={iconWrapper}>
                                        <PhoneIcon
                                            className={contactLinkIcon}
                                        />
                                    </div>
                                    <span>38 (093) 12 34 567</span>
                                </a>
                            </div>
                        </li>
                        <li className={contactSocialItem}>
                            <h3 className={contactSocialTitle}>E-mail:</h3>
                            <a
                                className={contactLink}
                                href="mailto:office@ecosolution.com"
                            >
                                <div className={iconWrapper}>
                                    <SmsIcon className={contactLinkIcon} />
                                </div>
                                <span>office@ecosolution.com</span>
                            </a>
                        </li>
                        <li className={contactSocialItem}>
                            <h3 className={contactSocialTitle}>Address:</h3>
                            <a
                                className={contactLink}
                                href="https://maps.app.goo.gl/4wEMGGNfCrechPkS6"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <div className={iconWrapper}>
                                    <MapIcon className={contactLinkIcon} />
                                </div>
                                <span>
                                    79005, Ukraine, Lvivstreet. Shota Rustaveli,
                                    7
                                </span>
                            </a>
                        </li>
                        <li className={contactSocialItem}>
                            <h3 className={contactSocialTitle}>
                                Social Networks:
                            </h3>
                            <div className={contactSocialLinkWrapper}>
                                <a
                                    aria-label="open facebook"
                                    className={contactSocialLink}
                                    href="."
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <FacebookIcon
                                        className={contactSocialIcon}
                                    />
                                </a>
                                <a
                                    aria-label="open instargam"
                                    className={contactSocialLink}
                                    href="."
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <InstagramIcon
                                        className={contactSocialIcon}
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ContactUsForm />
                </div>
            </div>
        </section>
    );
}
