import React, { useState } from "react"
import EditGame from "./EditGame";



function Game({ game, onDeleteGame, onUpdateGame }) {

    const { id, title, main_character, year_released } = game
    const { updating, setUpdating } = useState(false)

    function handleDeleteClick() {

        fetch(`http://localhost:9292/games/${id}`, {
            method: "DELETE",
        });

        onDeleteGame(id);


    }
    // function handleUpdateGame(updatedGame) {
    //     setUpdating(false);
    //     onUpdateGame(updatedGame);
    // }

    return (
        <div>
            <p>Series: {game.series.title}</p>
            <p>Game: {game.title}</p>
            <p>Character: {game.main_character}</p>
            <p>Year Of Release: {game.year_released}</p>
            <p>Console: {game.console}</p>
            <button onClick={handleDeleteClick}>Delete</button>
            {/* {updating ? ( */}
            <EditGame
                id={id}
                title={title}
                onUpdateGame={onUpdateGame}
            />
            {/* // ) : (
            //     <p>{title}</p>
            // )} */}
            {/* <button onClick={onUpdateGame}>Update</button> */}





        </div>

    )

}

export default Game