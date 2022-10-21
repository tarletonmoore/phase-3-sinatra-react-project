import React from "react";
import Game from "./Game"

function GameList({ games, onDeleteGame, onUpdateGame }) {


    return (
        <div className="list">
            <ul>
                {games.map((game) => (
                    <Game
                        key={game.id}
                        game={game}
                        onDeleteGame={onDeleteGame}
                        onUpdateGame={onUpdateGame}
                    />
                ))}
            </ul>
        </div>
    );

}

export default GameList