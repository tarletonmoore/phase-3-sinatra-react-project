import React, { useState } from "react";

function NewSeries(onAddSeries, series) {
    const [addSeries, setAddSeries] = useState({
        series_title: ""
    })

    function handleChange(event) {
        setAddSeries({
            ...addSeries,
            [event.target.name]: event.target.value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:9292/series", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    series_title: addSeries.series_title,


                }
            ),
        })
            .then((r) => r.json())
            .then((data) => {
                onAddSeries(data);
                setAddSeries(
                    {

                        title: ""
                    }
                );
            });

    }

    return (

        <section>
            <h1>Add Series</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Series:
                    <input
                        type="text"
                        name="series_title"
                        value={addSeries.series_title}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </section>

    )



}

export default NewSeries