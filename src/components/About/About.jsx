import { useMediaQuery } from 'react-responsive';

import {
    OpenIcon,
    ResponsIcon,
    InnovationIcon,
    QualityIcon,
} from 'assets/images/about/icons';

import {
    firstImgTablet,
    firstImgTablet2x,
    secondImgTablet,
    secondImgTablet2x,
    firstImgDesktop,
    firstImgDesktop2x,
    secondImgDesktop,
    secondImgDesktop2x,
} from 'assets/images/about';

import styles from './About.module.scss';
const {
    about,
    aboutTitleWrapper,
    aboutTitle,
    aboutPreTitle,
    aboutList,
    aboutItem,
    itemTitle,
    aboutItemIcon,
    itemPreTitle,
    aboutItemImg1,
    aboutItemImg2,
    aboutImg,
} = styles;

export function About() {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });
    return (
        <section name="About" className={about}>
            <div className="container">
                <div className={aboutTitleWrapper}>
                    <h2 className={aboutTitle}>Main about of our company</h2>
                    <p className={aboutPreTitle}>
                        EcoSolution envisions a world where sustainable energy
                        solutions power a brighter and cleaner future for all.
                        We aspire to be at the forefront of the global shift
                        towards renewable energy, leading the way in innovative
                        technologies that harness the power of nature to meet
                        the world's energy needs.
                    </p>
                </div>
                <ul className={aboutList}>
                    <li className={aboutItem}>
                        <h3 className={itemTitle}>
                            <span>
                                <OpenIcon className={aboutItemIcon} />
                            </span>
                            <span>Openness</span>
                        </h3>
                        <p className={itemPreTitle}>
                            to the world, people, new ideas and projects
                        </p>
                    </li>
                    <li className={aboutItem}>
                        <h3 className={itemTitle}>
                            <span>
                                <ResponsIcon className={aboutItemIcon} />
                            </span>
                            <span>Responsibility</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we are aware that the results of our work have an
                            impact on our lives and the lives of future
                            generations
                        </p>
                    </li>
                    <li className={aboutItem}>
                        <h3 className={itemTitle}>
                            <span>
                                <InnovationIcon className={aboutItemIcon} />
                            </span>
                            <span>Innovation</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we use the latest technology to implement
                            non-standard solutions
                        </p>
                    </li>
                    <li className={aboutItem}>
                        <h3 className={itemTitle}>
                            <span>
                                <QualityIcon className={aboutItemIcon} />
                            </span>
                            <span>Quality</span>
                        </h3>
                        <p className={itemPreTitle}>
                            we do not strive to be the first among others, but
                            we want to be the best in our business
                        </p>
                    </li>
                    {isTablet && (
                        <>
                            <li className={aboutItemImg1}>
                                <img
                                    className={aboutImg}
                                    srcSet={`${firstImgTablet} 1x, ${firstImgTablet2x} 2x`}
                                    src={firstImgTablet}
                                    alt="wind-farms-fields"
                                />
                            </li>
                            <li className={aboutItemImg2}>
                                <img
                                    className={aboutImg}
                                    srcSet={`${secondImgTablet} 1x, ${secondImgTablet2x} 2x`}
                                    src={secondImgTablet}
                                    alt="man worker firld by solar panels"
                                />
                            </li>
                        </>
                    )}
                    {isDesktop && (
                        <>
                            <li className={aboutItemImg1}>
                                <img
                                    className={aboutImg}
                                    srcSet={`${firstImgDesktop} 1x, ${firstImgDesktop2x} 2x`}
                                    src={firstImgDesktop}
                                    alt="wind farms fields"
                                />
                            </li>
                            <li className={aboutItemImg2}>
                                <img
                                    className={aboutImg}
                                    srcSet={`${secondImgDesktop} 1x, ${secondImgDesktop2x} 2x`}
                                    src={secondImgDesktop}
                                    alt="man worker firld by solar panels"
                                />
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </section>
    );
}
