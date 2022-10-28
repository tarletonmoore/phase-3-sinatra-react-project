import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <div>
            {/* <NavLink
                to="/"

            >
                Home
            </NavLink> */}
            <NavLink
                to="/games"

            >
                Games
            </NavLink>
            <NavLink
                to="/add"
            >
                Add Game
            </NavLink>
        </div>
    )



}

export default NavBar