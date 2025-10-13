import { createContext, useState, useEffect, useContext } from "react";

const pokemonNames = [
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard',
    'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree',
    'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata',
    'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu',
    'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m',
    'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales',
    'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume',
    'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth',
    'persian', 'psyduck', 'golduck', 'machop', 'machoke', 'machamp', 'bellsprout',
    'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler',
    'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton',
    'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder',
    'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'steelix', 'drowzee', 'hypno',
    'krabby', 'kingler', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'lickitung',
    'lickilicky', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'blissey',
    'tangela', 'tangrowth', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking',
    'staryu', 'starmie', 'mr-mime', 'scyther', 'electabuzz', 'magmar', 'pinsir',
    'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon',
    'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops',
    'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'mewtwo', 'mew'
];
const endPoint = "https://pokeapi.co/api/v2/pokemon/"

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    const [pokemonList, setPokemonList] = useState([]);

    //con le promise i pokemon mi arrivano nell'ordine giusto
    async function fetchPokemons() {
        try {
            const responses = await Promise.all(pokemonNames.map(name => axios.get(endPoint + name)));
            const pokemons = responses.map(res => res.data);
            setPokemonList(pokemons); 
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchPokemons();
    }, []);
    console.log(pokemonList)

    return (
        <PokemonContext.Provider value={{ pokemonList, fetchPokemons }}>
            {children}
        </PokemonContext.Provider>
    );

}

export function usePokemon() {
    return useContext(PokemonContext);
}


