import { usePokemon } from "../contexts/PokemonContext.jsx"

export default function PokemonList() {
    const { pokemonList } = usePokemon();
    console.log(pokemonList)

    return (
        <ul>  
            <h1>{pokemonList.name}</h1>
        </ul>
    );
}