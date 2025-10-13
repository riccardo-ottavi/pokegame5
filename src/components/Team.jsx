import PokemonCard from "./PokemonCard"

export default function Team(props){
    
    const { team } = props

    
    console.log(team)
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