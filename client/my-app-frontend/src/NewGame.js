import React, { useState } from "react"


function NewGame({ game, onAddGame }) {

    const [addGame, setAddGame] = useState({
        game_title: "",
        character: "",
        year: "",
        console: "",
        series_title: ""
    })

    function handleChange(event) {
        setAddGame({
            ...addGame,
            [event.target.name]: event.target.value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:9292/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    game_title: addGame.game_title,
                    main_character: addGame.character,
                    year_released: addGame.year,
                    console: addGame.console,
                    series_title: addGame.series_title

                }
            ),
        })
            .then((r) => r.json())
            .then((data) => {
                onAddGame(data);
                setAddGame(
                    {
                        title: "",
                        character: "",
                        year: "",
                        console: "",
                        series_id: ""
                    }
                );
            });

    }
    return (
        <section>
            <h1>Add Game</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Game:
                    <input
                        type="text"
                        name="game_title"
                        value={addGame.game_title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Character:
                    <input
                        type="text"
                        name="character"
                        value={addGame.character}
                        onChange={handleChange}
                    />

                </label>

                <label>
                    Year:
                    <input
                        type="number"
                        name="year"
                        value={addGame.year}
                        onChange={handleChange}
                    />

                </label>

                <label>
                    Console:
                    <input
                        type="text"
                        name="console"
                        value={addGame.console}
                        onChange={handleChange}
                    />

                </label>

                <label>
                    Series Title:
                    <input
                        type="text"
                        name="series_title"
                        value={addGame.series_title}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Add</button>

            </form>
        </section>
    )





}

export default NewGame
