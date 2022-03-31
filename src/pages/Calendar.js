import react, {useContext} from "react"

import {Context} from "../Context.js"
import Habit from "../components/Habit"

function Calendar() {

    const {allHabits} = useContext(Context)

    //calculating dates
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const today = new Date();
    const todayDay = today.getDay();
    const mondayDate = new Date(today.setDate(today.getDate() - todayDay + 1));
    const dates = [mondayDate];

    for (let i = 1; i < 7; i++){
        const date = new Date();
        date.setDate(mondayDate.getDate() + i)
        dates.push(date)
    }

    const habitElements = allHabits.map((habit, ind) => 
        <Habit 
            className={"habit" + ind}
            key={habit.id}
            id={habit.id} 
            name={habit.name} 
            dates={dates}
            frequency={habit.frequency}
            completed={habit.completed}
        />
    )

    const dayElements = dates.map(date =>
        <div className="day">
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



/*
import react from "react";

import Day from "../components/Day"
import Data from "../Data";

import {Context} from "../Context.js"
import Habit from "./Habit"

function Calendar() {

    const {allHabits} = useContext(Context)


    const habitElements = allHabits.map(habit => 
        <Habit
            key={habit.id}
            id={habit.id} 
            day={day}
            date={dateFormatted}
            name={habit.name} 
            frequency={habit.frequency}
            completed={habit.completed}
        />
    )




    const today = new Date();
    const todayDay = today.getDay();
    let mondayDate

    if (todayDay === 1) {
        mondayDate = today;
    } else {
        mondayDate = new Date(today.setDate(today.getDate() - todayDay + 1))
    }

    let dates = [mondayDate];

    for (let i = 1; i < 7; i++){
        const date = new Date();
        date.setDate(mondayDate.getDate() + i)
        dates.push(date)
    }

    return (
        <div className="calendar-page">
            <h4 className="calendar-title">Calendar</h4>
            <div className="calendar-container">
                <Day date={dates[0]}/>
                <Day date={dates[1]}/>
                <Day date={dates[2]}/>
                <Day date={dates[3]}/>
                <Day date={dates[4]}/>
                <Day date={dates[5]}/>
                <Day date={dates[6]}/>
            </div>
        </div>
    )
}

export default Calendar
*/