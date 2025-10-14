import PokemonCard from "./PokemonCard"

export default function Team(props){
    
    const { team } = props

    
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