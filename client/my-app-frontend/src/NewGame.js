import React, { useState } from "react"


function NewGame({ game, onAddGame }) {

    const [addGame, setAddGame] = useState({
        title: "",
        character: "",
        year: "",
        console: "",
        series_id: ""
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
                    title: addGame.title,
                    main_character: addGame.character,
                    year_released: addGame.year,
                    console: addGame.console,
                    series_id: addGame.series_id

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
                        name="title"
                        value={addGame.title}
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
                    Series id:
                    <input
                        type="number"
                        name="series_id"
                        value={addGame.series_id}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Add</button>

            </form>
        </section>
    )





}

export default NewGame
