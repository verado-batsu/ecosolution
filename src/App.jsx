import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { findHeaderHeight } from 'helpers/findHeaderHeight';

import './App.scss';

import { Main } from 'components/Main/Main';
import { Header } from 'components/Header/Header';
import { Electricity } from 'components/Electricity/Electricity';
import { Cases } from 'components/Cases/Cases';
import { About } from 'components/About/About';
import { FAQ } from 'components/FAQ/FAQ';
import { ContactUs } from 'components/ContactUs/ContactUs';
import { Footer } from 'components/Footer/Footer';

function App() {
    const [headerHeight, setHeaderHeight] = useState(() => findHeaderHeight());

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });

    useEffect(() => {
        setHeaderHeight(findHeaderHeight());
    }, [headerHeight, isMobile, isTablet, isDesktop]);

    return (
        <>
            <Header />
            <main>
                <Main />
                <About />
                <Electricity />
                <Cases />
                <FAQ />
                <ContactUs />
            </main>
            <Footer />
        </>
    );
}

export default App;
