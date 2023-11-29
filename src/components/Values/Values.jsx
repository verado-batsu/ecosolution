import { useMediaQuery } from 'react-responsive';

import { ReactComponent as OpenIcon } from 'assets/images/values/maximize-circle.svg';
import { ReactComponent as ResponsIcon } from 'assets/images/values/global-edit.svg';
import { ReactComponent as InnovationIcon } from 'assets/images/values/cpu-charge.svg';
import { ReactComponent as QualityIcon } from 'assets/images/values/ranking.svg';

import styles from './Values.module.scss';
const {
    values,
    valuesTitle,
    valuesPreTitle,
    valuesList,
    valuesItem,
    itemTitle,
    itemPreTitle,
} = styles;

export function Values() {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    return (
        <section name="Values" className={values}>
            <div className="container">
                <h2 className={valuesTitle}>Main values of our company</h2>
                <p className={valuesPreTitle}>
                    EcoSolution envisions a world where sustainable energy
                    solutions power a brighter and cleaner future for all. We
                    aspire to be at the forefront of the global shift towards
                    renewable energy, leading the way in innovative technologies
                    that harness the power of nature to meet the world's energy
                    needs.
                </p>
                <ul className={valuesList}>
                    <li className={valuesItem}>
                        <h3 className={itemTitle}>
                            <OpenIcon />
                            <span>Openness</span>
                        </h3>
                        <p className={itemPreTitle}>
                            to the world, people, new ideas and projects
                        </p>
                    </li>
                    <li className={valuesItem}>
                        <h3 className={itemTitle}>
                            <ResponsIcon />
                            <span>Responsibility</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we are aware that the results of our work have an
                            impact on our lives and the lives of future
                            generations
                        </p>
                    </li>
                    {isTablet && <li></li>}
                    <li className={valuesItem}>
                        <h3 className={itemTitle}>
                            <InnovationIcon />
                            <span>Innovation</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we use the latest technology to implement
                            non-standard solutions
                        </p>
                    </li>
                    <li className={valuesItem}>
                        <h3 className={itemTitle}>
                            <QualityIcon />
                            <span>Quality</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we do not strive to be the first among others, but
                            we want to be the best in our business
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
