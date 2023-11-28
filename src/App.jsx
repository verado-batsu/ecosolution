import { Main } from './components/Main/Main';
import './App.scss';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';

function App() {
    return (
        <>
            <Header />
            <main>
                <Main />
                <About />
            </main>
        </>
    );
}

export default App;
