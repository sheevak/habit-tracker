import React from "react"

import {Context} from "../Context"

function Habit(props) {

    return (
        <div className="day-habit">
                <p className="day-habit-button">
                    {props.name}
                </p>
                <button className="pie" style={{"--width":"20px", "--percentage": 60, "--color": "red"}} ></button>
                

        </div>
    )
}

export default Habit

{/* <button className="day-habit-button">Complete</button> */}