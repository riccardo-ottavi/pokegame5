
import { useState, useEffect } from "react"
import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";
import Team from "./Team";

export default function Game() {
    const { pokemonList, hasGameStarted, setHasGameStarted } = usePokemon();
    const [starters, setStarters] = useState([])
    const [currentTeam, setCurrentTeam] = useState([])
    const [activePokemon, setActivePokemon] = useState()

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
        console.log(pokemon.name, "e' stato aggiunto al team")
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
                <div className="game-window">
                    <div className="player">

                    </div>
                    <div className="enemy">

                    </div>
                </div>

            }
            <Team
                team={currentTeam}
                activePokemon={activePokemon}
                setActivePokemon={setActivePokemon}
            />

        </div>
    )
}