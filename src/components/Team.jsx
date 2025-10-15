import { useEffect } from "react";
import PokemonCard from "./PokemonCard"



export default function Team({ team }) {


    


    return (
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