import React, {useContext} from "react";

import {Context} from "../Context.js"
import Habit from "./Habit"

function Day(props) {

    const {habits} = useContext(Context)

    const habitElements = habits.map((habit,ind) => 
        <Habit
            key={ind} 
            day={props.index}
            name={habit.name} 
            frequency={habit.frequency}
            completed={habit.completed}
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