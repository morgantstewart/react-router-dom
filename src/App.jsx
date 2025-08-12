
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';

import PokemonDetails from './components/PokemonDetails/PokemonDetails';

import { useParams } from 'react-router';

// src/components/PokemonDetails/PokemonDetails.jsx

const { pokemonId } = useParams();
console.log('pokemonId:', pokemonId);


const PokemonList = (props) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {props.pokemon.map((currentPokemon) => (
          <li key={currentPokemon.name}>{currentPokemon.name}</li>
        ))}
      </ul>

      return (
      <>
        <h1>Pokemon!</h1>
        <NavBar />
      
      // src/App.jsx

      <Routes>
     // src/App.jsx

      <Routes>
       
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
      </Routes>
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />

      </Routes>

      </>
      );



    </>
  );
};


<Routes>
  <Route path="/" element={<h2>Home Page</h2>} />
  <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
</Routes>


export default PokemonList;
