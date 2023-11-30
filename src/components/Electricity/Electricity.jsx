import styled from './Electricity.module.scss';
const {
    electricity,
    electricityWrapper,
    electricityTitle,
    electricityCount,
    electricityQuantity,
    electricityUnits,
} = styled;

export function Electricity() {
    return (
        <section className={electricity}>
            <div className="container">
                <div className={electricityWrapper}>
                    <h2 className={electricityTitle}>
                        Electricity we produced for all time
                    </h2>
                    <p className={electricityCount}>
                        <span className={electricityQuantity}>
                            1.134.147.814
                        </span>
                        <span className={electricityUnits}>kWh</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
