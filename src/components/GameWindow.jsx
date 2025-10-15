import { useEffect, useState } from "react";
import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";


export default function GameWindow() {
    const { currentEnemy, activePokemon } = usePokemon();
    const [activePokemonHealth, setActivePokemonHealth] = useState()
    const [currentEnemyHealth, setCurrentEnemyHealth] = useState()


    useEffect(() => {
        setActivePokemonHealth(Math.floor(((2 * activePokemon.stats[0].base_stat) * activePokemon.level) / 100) + activePokemon.level + 10)
        setCurrentEnemyHealth(Math.floor(((2 * currentEnemy.stats[0].base_stat) * currentEnemy.level) / 100) + currentEnemy.level + 10)
    },[activePokemon, currentEnemy])


    console.log(activePokemonHealth)
    return (
        <>
            <div className="game-window">
                <div className="player">
                    <PokemonCard
                        pokemon={activePokemon}
                        health={activePokemonHealth}
                    />
                </div>
                <div className="enemy">
                    <PokemonCard
                        pokemon={currentEnemy}
                        health={currentEnemyHealth}
                    />
                </div>
                <div className="status">
                    <div className="moves">
                        <ul>
                            {activePokemon.learnedMoves.map((move) => (
                                <li>{move.move.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}