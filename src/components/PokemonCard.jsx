export default function PokemonCard(props) {
    const { pokemon, health } = props
 


    return (
        <div className="cards">
            <div className="cards-infos">
                <p>{pokemon.name}</p>
                <p>{health}</p>
                <p>Livello: {pokemon.level}</p>
                <img src={pokemon.sprites.front_default}></img>
                <ul>
                    {pokemon.types.map(type => (
                        <li>{type.type.name}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    )

}