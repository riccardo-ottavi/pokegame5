import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";


export default function GameWindow() {
    const { currentEnemy, activePokemon } = usePokemon();

    return (
        <>
            <div className="game-window">
                <div className="player">
                    <PokemonCard
                        pokemon={activePokemon}
                    />
                </div>
                <div className="enemy">
                    <PokemonCard
                        pokemon={currentEnemy}
                    />
                </div>
                <div className="status">       
                        <div className="moves">
                            <ul>
                                {activePokemon.learnedMoves.map((move)=> (
                                    <li>{move.move.name}</li>
                                ))}
                            </ul>
                        </div>              
                </div>
            </div>
        </>
    )
}