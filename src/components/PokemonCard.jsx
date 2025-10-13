export default function PokemonCard(props) {
    const { pokemon } = props

    return (
        <div className="cards">
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default}></img>
            <ul>
                {pokemon.types.map(type => (
                    <li>{type.type.name}</li>
                ))}
            </ul>
        </div>
        
    )
}