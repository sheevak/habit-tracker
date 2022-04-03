import react, {useContext} from "react"

import {Context} from "../Context.js"
import Habit from "../components/Habit"

function Calendar() {

    const {allHabits} = useContext(Context)

    //calculating dates
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const today = new Date();
    const daysSinceMonday = (today.getDay() + 6) % 7;

    const mondayDate = new Date(today)
    mondayDate.setDate(mondayDate.getDate() - daysSinceMonday)

    const dates = [mondayDate];

    for (let i = 1; i < 7; i++){
        const date = new Date(mondayDate);

        date.setDate(date.getDate() + i)
        dates.push(date)
    }

    const habitElements = allHabits.map((habit, ind) => 
        <Habit 
            key={habit.id}
            id={habit.id} 
            name={habit.name} 
            dates={dates}
            frequency={habit.frequency}
            completed={habit.completed}
        />
    )

    const dayElements = dates.map(date =>
        <div 
            key={date}
            className="day">
            <p>{days[date.getDay()]}</p>
            <p>{date.getDate() + "/" + (date.getMonth()+1)}</p>
        </div>    
    )

    return (
        <div className="calendar-page">
            <h4 className="calendar-title">Calendar</h4>
            <div className="calendar-container">
                <div className="grid">
                    <p></p>
                    {dayElements}
                </div>
                {habitElements}
            </div>
        </div>
    )
}

export default Calendar