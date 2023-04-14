import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // // componentDidUpdate = () => {} -> executa sempre que atualizar os componentes

    // useEffect(() => {
    //     console.log('componentDidUpdate');
    // });

    // // componentDidMount = () => {} -> executa 1x ao montar os componentes

    // useEffect(() => {
    //     console.log('componentDidMount');
    // }, []);

    // executa sempre que um determinado componente mudar (não todos) -> com dependência
    useEffect(() => {
        console.log('C1: ', counter, '; C2: ', counter2);
    }, [counter, counter2]);

    return (
        <div className="App">
            <h1>Contadores:</h1>
            <h2>Contador 1: {counter}</h2>
            <h2>Contador 2: {counter2}</h2>
            <button onClick={() => setCounter(counter + 1)}>C1 + 1</button>{' '}
            <button onClick={() => setCounter2(counter2 + 1)}>C2 + 1</button>
        </div>
    );
}
