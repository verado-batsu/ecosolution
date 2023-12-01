import { useRef } from 'react';

import { ReactComponent as PlusIcon } from 'assets/images/faq/icons/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/images/faq/icons/minus.svg';

export function FAQItem({ faqItem, onClick, isOpen }) {
    const faqAnswerRef = useRef(null);

    const { q, a, id } = faqItem;

    return (
        <li className="faq__item">
            <button
                type="button"
                className="faq__btn"
                onClick={() => onClick(id)}
            >
                <div className="faq__icon-wrapper">
                    {isOpen ? (
                        <MinusIcon className="faq__icon" />
                    ) : (
                        <PlusIcon className="faq__icon" />
                    )}
                </div>
                <h3 className="faq__q">{q}</h3>
            </button>
            <div
                className={`faq__collapse ${isOpen ? 'open' : ''}`}
                style={
                    isOpen
                        ? { height: faqAnswerRef.current?.scrollHeight }
                        : { height: 0 }
                }
            >
                <p className="faq__a" ref={faqAnswerRef}>
                    {a}
                </p>
            </div>
        </li>
    );
}
