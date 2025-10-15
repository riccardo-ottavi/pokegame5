
import { useState, useEffect } from "react"
import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";
import Team from "./Team";
import GameWindow from "./GameWindow";


export default function Game() {
    const { pokemonList, hasGameStarted, setHasGameStarted, setActivePokemon, activePokemon } = usePokemon();
    const [starters, setStarters] = useState([])
    const [currentTeam, setCurrentTeam] = useState([])

    pokemonList.map(teamMember => {
        teamMember.level = 5;
    })

    //use effect per settare gli starter evitando asincronicità
    useEffect(() => {
        const starterNames = ["abra", "gastly", "machop"];
        setStarters(pokemonList.filter(pokemon => starterNames.includes(pokemon.name)));
    }, [pokemonList]);


    function handleClick(pokemon) {
        setStarter(pokemon)
        setHasGameStarted(true);
    }

    function setStarter(pokemon) {
        setCurrentTeam(prev => [...prev, pokemon])
        setActivePokemon(pokemon)
    }

    return (
        <div className="game">
            {!hasGameStarted &&
                <ul className="starter-trio">
                    {starters.map(pokemon => (
                        <li onClick={() => handleClick(pokemon)}>
                            <PokemonCard
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        </li>
                    ))}
                </ul>
            }

            {hasGameStarted &&
                <GameWindow />
            }
            <Team
                team={currentTeam}
            />

        </div>
    )
}