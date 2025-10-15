import { useEffect, useState } from "react";
import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";


export default function GameWindow() {
    const { currentEnemy, activePokemon } = usePokemon();
    const [activePokemonMaxHealth, setActivePokemonMaxHealth] = useState()
    const [currentEnemyMaxHealth, setCurrentEnemyMaxHealth] = useState()
    const [activePokemonDmgTaken, setActivePokemonDmgTaken] = useState(0)
    const [currentEnemyDmgTaken, setCurrentEnemyDmgTaken] = useState(0)

    useEffect(() => {
        setActivePokemonMaxHealth(Math.floor(((2 * activePokemon.stats[0].base_stat) * activePokemon.level) / 100) + activePokemon.level + 10)
        setCurrentEnemyMaxHealth(Math.floor(((2 * currentEnemy.stats[0].base_stat) * currentEnemy.level) / 100) + currentEnemy.level + 10)
    }, [activePokemon, currentEnemy])

    return (
        <>
            <div className="game-window">
                <div className="player">
                    {activePokemonMaxHealth && (
                        <PokemonCard
                            pokemon={activePokemon}
                            maxHealth={activePokemonMaxHealth}
                            dmgTaken={activePokemonDmgTaken}
                        />
                    )}
                </div>

                <div className="enemy">
                    {currentEnemyMaxHealth && (
                        <PokemonCard
                            pokemon={currentEnemy}
                            maxHealth={currentEnemyMaxHealth}
                            dmgTaken={currentEnemyDmgTaken}
                        />
                    )}
                </div>
            </div>
        </>
    )
}