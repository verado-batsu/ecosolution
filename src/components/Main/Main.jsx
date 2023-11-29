import styles from './Main.module.scss';
const { main, mainTitle, mainPreTitle } = styles;

export function Main() {
    return (
        <section name="Main" className={main}>
            <div className="container">
                <h1 className={mainTitle}>RENEWABLE ENERGY For any task</h1>
                <p className={mainPreTitle}>
                    Development and implementation of renewable non-polluting
                    energy sources, generating power generation using energy
                    wind, sun, water, biomass
                </p>
            </div>
        </section>
    );
}
