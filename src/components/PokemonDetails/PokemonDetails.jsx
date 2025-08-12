import { useParams } from 'react-router-dom';

const PokemonDetails = (props) => {
  // Always verify that any props are being passed correctly!
  console.log(props); 


  const { pokemonId } = useParams();
  console.log('pokemonId:', pokemonId);

  // New code: Find a single pokemon object from the array of pokemon
  //           using the pokemonId from the URL params.
  const singlePokemon = props.pokemon.find((poke) => (
    poke._id === Number(pokemonId)
  ));
  console.log('Pokemon Object:', singlePokemon)

  // If no pokemon matches the id, render a simple message instead of crashing
  if (!singlePokemon) {
    return <p>Pokemon not found.</p>;
  }

// src/components/PokemonDetails/PokemonDetails.jsx

  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );

};

export default PokemonDetails;
