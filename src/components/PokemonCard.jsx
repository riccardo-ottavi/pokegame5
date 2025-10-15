export default function PokemonCard(props) {
    const { pokemon, health } = props
 


    return (
        <div className="cards">
            <div className="cards-infos">
                <p>{pokemon.name}</p>
                <div className="health-bar">
                    <div className="actual-life" style={{ width: `${health}px` }}><p>{health}</p></div>
                </div>
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