
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonList from './components/PokemonList/PokemonList';

// Define a small sample dataset so the app can render
const pokemon = [
  { _id: 1, name: 'Bulbasaur', weight: 6.9, height: 0.7 },
  { _id: 4, name: 'Charmander', weight: 8.5, height: 0.6 },
  { _id: 7, name: 'Squirtle', weight: 9.0, height: 0.5 },
];

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
