import React from "react"

import {Context} from "../Context"

function Habit(props) {

    return (
        <div className="day-habit">
                <p className="day-habit-button">
                    {props.name}
                </p>
                <button className="day-habit-button">Complete</button>

        </div>
    )
}

export default Habit