import './App.css';
import Container from './layout/container';
import Renderer from './layout/renderer';

function App() {
  return (
    <>
      <header className='App-header'>
        <h3>React Studio</h3>
      </header>
      <main>
        <Container />
        <Renderer />
      </main>
    </>
  );
}

export default App;
