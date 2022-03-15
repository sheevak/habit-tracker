import react from "react";

import Header from "../components/Header";
import Day from "../components/Day"

function Calendar() {
    return (
        <div className="calendar-page">
            <h4 className="calendar-title">Calendar</h4>
            <div className="calendar-container">
                <Day date="Monday"/>
                <Day date="Tuesday"/>
                <Day date="Wednesday"/>
                <Day date="Thursday"/>
                <Day date="Friday"/>
                <Day date="Saturday"/>
                <Day date="Sunday"/>
            </div>
        </div>
    )
}

export default Calendar