import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import { findHeaderHeight } from 'helpers';
import { faqData } from 'data/faqData';

import { FAQItem } from './FAQItem';

import './FAQ.scss';

export function FAQ() {
    const [openId, setOpenId] = useState(faqData[0].id);
    const [headerHeight, setHeaderHeight] = useState(() => findHeaderHeight());

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });

    useEffect(() => {
        setHeaderHeight(findHeaderHeight());
    }, [headerHeight, isMobile, isTablet, isDesktop]);

    function handleClick(id) {
        if (id === openId) {
            setOpenId(null);
        } else {
            setOpenId(id);
        }
    }

    return (
        <section name="FAQ" className="faq">
            <div className="container">
                <div className="faq__wrapper">
                    <h2 className="faq__title">Frequently Asked Questions</h2>
                    <ul className="faq__list">
                        {faqData.map(faqItem => {
                            return (
                                <FAQItem
                                    key={faqItem.id}
                                    onClick={handleClick}
                                    faqItem={faqItem}
                                    isOpen={faqItem.id === openId}
                                />
                            );
                        })}
                    </ul>
                    <div className="faq__pretitle-wrapper">
                        <h3 className="faq__pretitle">
                            Didn't find the answer to your question?
                        </h3>
                        <div className="faq__link-box">
                            <Link
                                to="Contact Us"
                                className="faq__contact-us"
                                smooth={true}
                                offset={Number(`-${headerHeight}`)}
                                duration={500}
                            >
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
