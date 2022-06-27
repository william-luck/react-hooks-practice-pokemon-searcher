import React from "react";

function Search({ pokemon, setPokemon, displayAll, setDisplayAll }) {


  function handleSubmit(event) {
    if (event.key === 'Enter') {
      if (event.target.value !== '') { 
        const sorted = pokemon.filter(pokemon => (pokemon.name).includes(event.target.value)) //All that we need, just the pokemon and setPokemon
        setPokemon(sorted)
      } else {
        setDisplayAll(!displayAll)
      }
    } else if (event.key === 'Backspace') {
      setDisplayAll(!displayAll)
    }
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onKeyPress={handleSubmit}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
