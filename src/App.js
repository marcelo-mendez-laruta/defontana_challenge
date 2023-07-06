import logo from './logo.svg';
import './App.css';
import { PokemonRouter } from "./routes"
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <Container className="App">
      <PokemonRouter />
    </Container>
  );
}

export default App;
