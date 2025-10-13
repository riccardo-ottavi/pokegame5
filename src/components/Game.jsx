import { useState, useEffect } from "react"
import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";
import Team from "./Team";

export default function Game() {
    const { pokemonList } = usePokemon();
    const [starters, setStarters] = useState([])
    const [selectedStarter, setSelectedStarter] = useState()

    //use effect per settare gli starter evitando asincronicità
    useEffect(() => {
        const starterNames = ["abra", "gastly", "machop"];
        setStarters(pokemonList.filter(pokemon => starterNames.includes(pokemon.name)));
    }, [pokemonList]);


    return (
        <div className="game">
            <ul>
                {starters.map(pokemon => (
                    <li>
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    </li>
                ))}
            </ul>
            <Team />
        </div>
    )
}