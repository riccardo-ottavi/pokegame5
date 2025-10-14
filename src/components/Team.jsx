import PokemonCard from "./PokemonCard"
import { useEffect, useState } from "react"

export default function Team(props){

    const [activePokemon, setActivePokemon] = useState()
    const { team } = props

    useEffect(() =>{
        setActivePokemon(team[0])
        console.log(activePokemon)
    }
    ),[team]

    


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