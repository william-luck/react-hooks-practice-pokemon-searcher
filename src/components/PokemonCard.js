import {React, useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const {id, name, hp, sprites} = pokemon
  
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(!clicked)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img src={!clicked ? sprites.front : sprites.back } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
