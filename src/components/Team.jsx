import PokemonCard from "./PokemonCard"
import { useEffect, useState } from "react"

export default function Team({ team, activePokemon, setActivePokemon }){


    useEffect(() =>{
        setActivePokemon(team[0])
        console.log(activePokemon)
    }
    ),[team, setActivePokemon]

    return(
        <div className="team">
            <ul>
                {team.map(teamMember =>
                    <PokemonCard 
                        key={teamMember.id}
                        pokemon={teamMember}
                    />
                )}
            </ul>
        </div>
    )
}

function swapPokemon() {

}