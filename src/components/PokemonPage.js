import {React, useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [displayAll, setDisplayAll] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(response => response.json())
      .then(src => setPokemon(src))
  }, [displayAll])

  function render() {
    setDisplayAll(!displayAll)
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm render={render} />
      <br />
      <Search pokemon={pokemon} setPokemon={setPokemon} displayAll={displayAll} setDisplayAll={setDisplayAll}/>
      <br />
      <PokemonCollection pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
