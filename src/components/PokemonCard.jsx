import { useEffect, useState } from "react"

export default function PokemonCard(props) {
    const { pokemon, maxHealth, dmgTaken } = props
    const [currentHp, setCurrentHp] = useState(maxHealth)
    useEffect(() => {
        setCurrentHp(maxHealth - dmgTaken)
    },[dmgTaken])

    return (
        <div className="cards">
            <div className="cards-infos">
                <p>{pokemon.name}</p>
                <div className="health-bar">
                    <div className="actual-life" style={{ width: `${(currentHp / maxHealth) * 100 }%` }}></div>
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