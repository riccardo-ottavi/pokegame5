import { usePokemon } from "../contexts/PokemonContext.jsx"
import PokemonCard from "./PokemonCard.jsx";

export default function PokeDex() {
    const { pokemonList } = usePokemon();

    return (
        
        <ul>
            {pokemonList.map(pokemon =>
                <li><PokemonCard 
                    pokemon={pokemon}
                /></li>
            )}
        </ul>
    );
}