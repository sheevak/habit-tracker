import react from "react";

import Header from "../components/Header";
import Day from "../components/Day"
import Data from "../Data";

function Calendar() {

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