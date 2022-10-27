import React from "react"




function Game({ game, onDeleteGame, onUpdateGame }) {

    const { id, title, main_character, year_released } = game


    function handleDeleteClick() {

        fetch(`http://localhost:9292/games/${id}`, {
            method: "DELETE",
        });

        onDeleteGame(id);


    }


    return (
        <div>
            <p>Series: {game.series.title}</p>
            <p>Game: {game.title}</p>
            <p>Character: {game.main_character}</p>
            <p>Year Of Release: {game.year_released}</p>
            <p>Console: {game.console}</p>
            <button onClick={handleDeleteClick}>Delete</button>
            {/* <button onClick={ }>Update</button>*/}




        </div>

    )

}

export default Game