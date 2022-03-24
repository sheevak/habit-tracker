import react from "react";

import Header from "../components/Header";
import Day from "../components/Day"

function Calendar() {
    return (
        <div className="calendar-page">
            <h4 className="calendar-title">Calendar</h4>
            <div className="calendar-container">
                <Day index={0} date="Monday"/>
                <Day index={1} date="Tuesday"/>
                <Day index={2} date="Wednesday"/>
                <Day index={3} date="Thursday"/>
                <Day index={4} date="Friday"/>
                <Day index={5} date="Saturday"/>
                <Day index={6} date="Sunday"/>
            </div>
        </div>
    )
}

export default Calendar