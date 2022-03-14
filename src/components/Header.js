import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to="/">
                <h1 class="header-title">Habit Tracker</h1>
            </Link>
            <Link to="/habits">
                <h3>Habits</h3>
            </Link>
            <Link to="/calendar">
                <h3>Calendar</h3>
            </Link>
            <Link to="/profile">
                <h3>Profile</h3>
            </Link>
        </header >
    )
}

export default Header