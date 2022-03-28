import React, {useContext} from "react";

import {Context} from "../Context.js"
import Habit from "./Habit"

function Day(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const {allHabits} = useContext(Context)

    const habitElements = allHabits.map(habit => 
        <Habit
            key={habit.id}
            id={habit.id} 
            day={props.index}
            name={habit.name} 
            frequency={habit.frequency}
            completed={habit.completed}
        />
    )

    return (
        <div className="day-container">
            <h4>{days[props.date.getDay()]}</h4>
            <h4>{props.date.getDate() + "/" + props.date.getMonth()}</h4>
            <hr />
            {habitElements}
            
        </div>
    )
}

export default Day