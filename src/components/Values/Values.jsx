import { useMediaQuery } from 'react-responsive';

import { ReactComponent as OpenIcon } from 'assets/images/values/icons/maximize-circle.svg';
import { ReactComponent as ResponsIcon } from 'assets/images/values/icons/global-edit.svg';
import { ReactComponent as InnovationIcon } from 'assets/images/values/icons/cpu-charge.svg';
import { ReactComponent as QualityIcon } from 'assets/images/values/icons/ranking.svg';

// tablet images
import firstImgTablet from 'assets/images/values/firstImgValuesTablet.jpg';
import firstImgTablet2x from 'assets/images/values/firstImgValuesTablet@2x.jpg';
import secondImgTablet from 'assets/images/values/secondImgValuesTablet.jpg';
import secondImgTablet2x from 'assets/images/values/secondImgValuesTablet@2x.jpg';

// desktop images
import firstImgDesktop from 'assets/images/values/firstImgValuesDesktop.jpg';
import firstImgDesktop2x from 'assets/images/values/firstImgValuesDesktop@2x.jpg';
import secondImgDesktop from 'assets/images/values/secondImgValuesDesktop.jpg';
import secondImgDesktop2x from 'assets/images/values/secondImgValuesDesktop@2x.jpg';

import styles from './Values.module.scss';
const {
    values,
    valuesTitleWrapper,
    valuesTitle,
    valuesPreTitle,
    valuesList,
    valuesItem,
    itemTitle,
    valuesItemIcon,
    itemPreTitle,
    valuesItemImg1,
    valuesItemImg2,
    valuesImg,
} = styles;

export function Values() {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });
    return (
        <section name="Values" className={values}>
            <div className="container">
                <div className={valuesTitleWrapper}>
                    <h2 className={valuesTitle}>Main values of our company</h2>
                    <p className={valuesPreTitle}>
                        EcoSolution envisions a world where sustainable energy
                        solutions power a brighter and cleaner future for all.
                        We aspire to be at the forefront of the global shift
                        towards renewable energy, leading the way in innovative
                        technologies that harness the power of nature to meet
                        the world's energy needs.
                    </p>
                </div>
                <ul className={valuesList}>
                    <li className={valuesItem}>
                        <h3 className={itemTitle}>
                            <OpenIcon className={valuesItemIcon} />
                            <span>Openness</span>
                        </h3>
                        <p className={itemPreTitle}>
                            to the world, people, new ideas and projects
                        </p>
                    </li>
                    <li className={valuesItem}>
                        <h3 className={itemTitle}>
                            <ResponsIcon className={valuesItemIcon} />
                            <span>Responsibility</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we are aware that the results of our work have an
                            impact on our lives and the lives of future
                            generations
                        </p>
                    </li>
                    <li className={valuesItem}>
                        <h3 className={itemTitle}>
                            <InnovationIcon className={valuesItemIcon} />
                            <span>Innovation</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we use the latest technology to implement
                            non-standard solutions
                        </p>
                    </li>
                    <li className={valuesItem}>
                        <h3 className={itemTitle}>
                            <QualityIcon className={valuesItemIcon} />
                            <span>Quality</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we do not strive to be the first among others, but
                            we want to be the best in our business
                        </p>
                    </li>
                    {isTablet && (
                        <>
                            <li className={valuesItemImg1}>
                                <img
                                    className={valuesImg}
                                    srcSet={`${firstImgTablet} 1x, ${firstImgTablet2x} 2x`}
                                    src={firstImgTablet}
                                    alt="wind turbine clean energy"
                                />
                            </li>
                            <li className={valuesItemImg2}>
                                <img
                                    className={valuesImg}
                                    srcSet={`${secondImgTablet} 1x, ${secondImgTablet2x} 2x`}
                                    src={secondImgTablet}
                                    alt="wind turbine clean energy"
                                />
                            </li>
                        </>
                    )}
                    {isDesktop && (
                        <>
                            <li className={valuesItemImg1}>
                                <img
                                    className={valuesImg}
                                    srcSet={`${firstImgDesktop} 1x, ${firstImgDesktop2x} 2x`}
                                    src={firstImgDesktop}
                                    alt="wind turbine clean energy"
                                />
                            </li>
                            <li className={valuesItemImg2}>
                                <img
                                    className={valuesImg}
                                    srcSet={`${secondImgDesktop} 1x, ${secondImgDesktop2x} 2x`}
                                    src={secondImgDesktop}
                                    alt="wind turbine clean energy"
                                />
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </section>
    );
}
