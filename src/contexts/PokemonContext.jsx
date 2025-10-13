import { createContext, useState, useEffect, useContext } from "react";

const endPoint = "https://pokeapi.co/api/v2/pokemon/bulbasaur"

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    const [pokemonList, setPokemonList] = useState([]);


    function fetchPokemons(){
        axios.get(endPoint)
        .then(res => setPokemonList(res.data))
        .catch(error => console.error(error))
    }


    useEffect(() => {
        fetchPokemons();
    }, []);


    return (
        <PokemonContext.Provider value={{ pokemonList, fetchPokemons }}>
            {children}
        </PokemonContext.Provider>
    );

}
    // Hook personalizzato per accedere facilmente al context
    export function usePokemon() {
        return useContext(PokemonContext);
    }


