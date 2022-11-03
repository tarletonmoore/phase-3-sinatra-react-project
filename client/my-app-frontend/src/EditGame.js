import React, { useState } from "react";


function EditGame({ games, onUpdateGame, title, id }) {

    const [gameTitle, setGameTitle] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/games/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: gameTitle,
            }),
        })
            .then((r) => r.json())
            .then((updatedTitle) => onUpdateGame(updatedTitle));
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <p>Change Name</p>
            <input
                type="text"
                name="title"
                value={gameTitle}
                onChange={(e) => setGameTitle(e.target.value)}
            />

            <input type="submit" value="Save" />
        </form>
    );






}

export default EditGame