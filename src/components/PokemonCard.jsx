import { useEffect } from "react";

export default function PokemonCard(props) {
    const { pokemon } = props
    const maxMoves = [0, 0, 0, 0]




    function getRandomMove() {
        const randomMove = Math.floor(Math.random() * pokemon.moves.length);
        return randomMove
    }

    return (
        <div className="cards">
            <div className="cards-infos">
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default}></img>
                <ul>
                    {pokemon.types.map(type => (
                        <li>{type.type.name}</li>
                    ))}
                </ul>
            </div>
            <div className="moves">
                <ul>
                    {maxMoves.map(() => (
                        <li>{pokemon.moves[getRandomMove()].move.name}</li>
                    ))}
                </ul>
                <ul>
                    <li>{pokemon.moves[0].move.name}</li>
                </ul>
            </div>
        </div>
        
    )

}