import { usePokemon } from "../contexts/PokemonContext.jsx"

export default function PokeDex() {
    const { pokemonList } = usePokemon();

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