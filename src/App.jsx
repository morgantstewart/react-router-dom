
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonList from './components/PokemonList/PokemonList';
import { pokemon } from './data/pokemon';

const App = () => {
  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails pokemon={pokemon} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;
