import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
    const [reverse, setReverse] = useState(false);
    const [counter, setCounter] = useState(0);
    const reverseClass = reverse ? 'reverse' : '';

    const handleClick = () => {
        setReverse(!reverse);
    };

    const handleCounter = () => {
        setCounter(counter + 1);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className={`App-logo ${reverseClass}`}
                    alt="logo"
                />

                <h1>Contador: {counter}</h1>

                <p>
                    <button onClick={handleClick}>
                        {reverse
                            ? 'Mudar para sentido horário'
                            : 'Mudar para sentido anti-horário'}
                    </button>
                </p>
                <p>
                    <button onClick={handleCounter}>
                        Incrementar contador
                    </button>
                </p>
            </header>
        </div>
    );
}
