{
  // useContext -> cria um contexto onde todos os elementos filhos do contexto podem utilizar as suas
  // props sem precisar passar de filho para filho consecutivamente
  // criar um objeto para o estado global, que possa ser utilizado, como o "globalState" deste documento
  // necessário utilizar da seguinte forma:
  /*
    <NomeDoContexto.Provider value={objetoDoContextoGlobal}>
        <FilhosDoContexto>
            <Etc />
        </FilhosDoContexto>
    </NomeDoContexto.Provider>
*/
  // se quiser atualizar algum dos valores do objeto do contexto, é necessário "atualizar todos", mesmo
  // que os seus valores se mantenham os mesmos, devem ser referenciados e definidos como eles mesmos, como:
  // <p onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>
}

import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
    >
      {body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
