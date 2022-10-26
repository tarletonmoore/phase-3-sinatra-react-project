import React, { useState } from "react"


function NewGame({ game, onAddGame }) {

    const [addGame, setAddGame] = useState({
        // series: "",
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
    console.log(game)
    // console.log(game.series)

    function handleSubmit(e) {
        e.preventDefault()
        const newGameInfo = {
            // "series": game.series.title,
            "title": game.title,
            "character": game.main_character,
            "year": game.year_released,
            "console": game.console,
            "series_id": game.series_id

        }

        fetch("http://localhost:9292/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGameInfo),
            // {
            //     "series": game.series.title,
            //     "title": game.title,
            //     "character": game.main_character,
            //     "year": game.year_released,
            //     "console": game.console


            // }
            // ),
        })
            .then((r) => r.json())
            .then((newGame) => {
                onAddGame(newGame);
                setAddGame({
                    // series: "",
                    title: "",
                    character: "",
                    year: "",
                    console: "",
                    series_id: ""
                });
            });
    }
    return (
        <section>
            <h1>Add Game</h1>
            <form onSubmit={handleSubmit}>
                {/* <label>
                    Series:
                    <input
                        type="text"
                        name="series"
                        value={addGame.series}
                        onChange={handleChange}
                    />
                </label> */}
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
                        name="series"
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
