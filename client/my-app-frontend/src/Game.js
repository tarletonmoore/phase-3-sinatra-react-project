import React, { useState } from "react"




function Game({ game, onDeleteGame, onUpdateGame }) {

    function handleDeleteGame() {
        fetch(`http://localhost:9292/games/${id}`, {
            method: "DELETE",
        });

        onDeleteGame(id);


    }


    return (
        <div>

            <button onClick={handleDeleteGame}></button>





        </div>

    )

}

export default Game