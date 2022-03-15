import React, {useContext} from "react";

import {Context} from "../Context.js"
import Habit from "./Habit"

function Day(props) {

    const {habits} = useContext(Context)

    const habitElements = habits.map(habit => 
        <Habit 
            name={habit.name} 
            frequency={habit.frequency}
        />
    )

    return (
        <div className="day-container">
            <h4>{props.date}</h4>
            <hr />
            {habitElements}
            
        </div>
    )
}

export default Day