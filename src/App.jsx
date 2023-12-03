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
