import { useState, useEffect } from "react"
import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";
import Team from "./Team";

export default function Game() {
    const { pokemonList } = usePokemon();
    const [starters, setStarters] = useState([])
    const [ currentTeam, setCurrentTeam ] = useState([])

    //use effect per settare gli starter evitando asincronicità
    useEffect(() => {
        const starterNames = ["abra", "gastly", "machop"];
        setStarters(pokemonList.filter(pokemon => starterNames.includes(pokemon.name)));
    }, [pokemonList]);

    function addToTeam(pokemon) {
        setCurrentTeam(prev => [...prev, pokemon])
        console.log(pokemon.name, "e' stato aggiunto al team")
    }
console.log(currentTeam)
    return (
        <div className="game">
            <ul>
                {starters.map(pokemon => (
                    <li onClick={() => addToTeam(pokemon)}>
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    </li>
                ))}
            </ul>
            <Team 
                team={currentTeam}
            />
            
        </div>
    )
}