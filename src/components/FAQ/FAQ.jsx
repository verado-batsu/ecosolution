import { useState } from 'react';

import { FAQItem } from './FAQItem';
import { faqData } from 'data/faqData';

import './FAQ.scss';

export function FAQ() {
    const [openId, setOpenId] = useState(faqData[0].id);

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
            </div>
        </section>
    );
}
