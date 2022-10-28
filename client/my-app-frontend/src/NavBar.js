import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        color: "white",
    };
    return (
        <div>

            <NavLink
                to="/games"
                style={linkStyles}

            >
                Games
            </NavLink>
            <NavLink
                to="/add"
                style={linkStyles}
            >
                Add Game
            </NavLink>
        </div>
    )



}

export default NavBar