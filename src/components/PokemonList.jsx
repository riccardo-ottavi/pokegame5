import { usePokemon } from "../contexts/PokemonContext.jsx"

export default function PokemonList() {
    const { pokemonList } = usePokemon();
    console.log(pokemonList)

    return (
        <ul>  
            {pokemonList.map(pokemon =>
                <li
                    key={pokemon.id}
                >{pokemon.name}</li>
            )}
        </ul>
    );
}