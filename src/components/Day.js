import React, {useContext} from "react";

import {Context} from "../Context.js"
import Habit from "./Habit"

function Day(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateFormatted = props.date.getDate() + "/" + (props.date.getMonth()+1) + "/" + props.date.getFullYear();

    const {allHabits} = useContext(Context)

    const habitElements = allHabits.map(habit => 
        <Habit
            key={habit.id}
            id={habit.id} 
            date={dateFormatted}
            name={habit.name} 
            frequency={habit.frequency}
            completed={habit.completed}
        />
    )

        console.log(dateFormatted)

    return (
        <div className="day-container">
            <h4>{days[props.date.getDay()]}</h4>
            <h5>{props.date.getDate() + "/" + (props.date.getMonth()+1)}</h5>
            <hr />
            {habitElements}
            
        </div>
    )
}

export default Day