import { formatNumber } from 'helpers';

import styled from './Electricity.module.scss';
import { useEffect, useState } from 'react';
const {
    electricity,
    electricityWrapper,
    electricityTitle,
    electricityCount,
    electricityQuantity,
    electricityUnits,
} = styled;

export function Electricity() {
    const [counterNumber, setCounterNumber] = useState(
        Math.floor(new Date().getTime() / 1000)
    );

    useEffect(() => {
        let timerId = null;
        function updateCounter() {
            setCounterNumber(prev => prev + 1);
        }

        timerId = setInterval(updateCounter, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <section className={electricity}>
            <div className="container">
                <div className={electricityWrapper}>
                    <h2 className={electricityTitle}>
                        Electricity we produced for all time
                    </h2>
                    <p className={electricityCount}>
                        <span className={electricityQuantity}>
                            {formatNumber(counterNumber)}
                        </span>
                        <span className={electricityUnits}>kWh</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
