import React, { useReducer } from 'react'
import './App.css';
import Container from './layout/container';
import Renderer from './layout/renderer';
import StudioContext from './store/context';

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StudioContext.Provider value={{}}>
      <header className='App-header'>
        <h3>React Studio</h3>
      </header>
      <main>
        <Container />
        <Renderer />
      </main>
    </StudioContext.Provider>
  );
}

export default App;
