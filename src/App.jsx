import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { findHeaderHeight } from 'helpers/findHeaderHeight';

import './App.scss';

import { Main } from 'components/Main/Main';
import { Header } from 'components/Header/Header';
import { About } from 'components/About/About';
import { Electricity } from 'components/Electricity/Electricity';
import { Cases } from 'components/Cases/Cases';
import { Values } from 'components/Values/Values';
import { FAQ } from 'components/FAQ/FAQ';
import { ContactUs } from 'components/ContactUs/ContactUs';
import { Footer } from 'components/Footer/Footer';
import { Services } from 'components/Services/Services';
import { Customers } from 'components/Customers/Customers';

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
            <main style={{ paddingTop: headerHeight }}>
                <Main />
                <About />
                <Values />
                <Electricity />
                <Services />
                <Cases />
                <FAQ />
                <Customers />
                <ContactUs />
            </main>
            <Footer />
        </>
    );
}

export default App;
