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
    'persian', 'psyduck', 'golduck', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout',
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
    const [hasGameStarted, setHasGameStarted] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [currentEnemy, setCurrentEnemy] = useState()
    const [activePokemon, setActivePokemon] = useState()


    //con le promise i pokemon mi arrivano nell'ordine giusto e poi setta un nemico casuale
    async function fetchPokemons() {
        try {
            const responses = await Promise.all(
                pokemonNames.map(name => axios.get(endPoint + name))
            );

            const pokemons = responses.map(res => {
                const data = res.data;
                // Aggiungo la nuova proprietà learnedMoves direttamente qui
                return {
                    ...data,
                    learnedMoves: data.moves.slice(0, 4),
                };
            });

            setPokemonList(pokemons);

            const randomEnemy = Math.floor(Math.random() * pokemons.length);
            setCurrentEnemy(pokemons[randomEnemy]);

            console.log(pokemons[randomEnemy]);
        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        fetchPokemons();
    }, []);




    return (
        <PokemonContext.Provider value={{ pokemonList, fetchPokemons, hasGameStarted, setHasGameStarted, isGameOver, setIsGameOver, currentEnemy, setCurrentEnemy, activePokemon, setActivePokemon }}>
            {children}
        </PokemonContext.Provider>
    );

}

export function usePokemon() {
    return useContext(PokemonContext);
}


