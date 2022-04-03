import react, {useState, useContext} from "react"
import {Context} from "../Context"

function Habit(props) {
    const {allHabits, updateComplete} = useContext(Context)

    //arrays to track the count and completed values for this habit
    const countArray = [];
    const completedArray = [];

    //populates the count/completed array using data from Context
    for (let i = 0; i < 7; i++) {
        let date = props.dates[i]
        let formattedDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()


        let filteredCompleted = props.completed.filter(obj => obj.date == formattedDate);
        let count = filteredCompleted.length === 1 ? filteredCompleted[0].count : 0;
        countArray.push(count)
        completedArray.push(count===props.frequency[0])
    }

    //reformats the date
    function formatDate(date) {
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    }

    //increases the count for the selected day and updates the data
    function complete(day) {
        const formattedDate = formatDate(props.dates[day])

        if (countArray[day] < props.frequency[0]) {
            countArray[day] += 1
            updateComplete(formattedDate, props.id, countArray[day])
        }
    }

    const buttonElements = props.dates.map((date,ind) => 
        <button 
            key = {props.dates[ind]}
            onClick={() => complete(ind)} 
            className="pie" 
            style={{
                "--width":"20px", 
                "--percentage": countArray[ind]/props.frequency[0]*100, 
                "--color": completedArray[ind] ? "green" : "red"
            }} 
        ></button>
    )

    return (
        <div className="grid" style={{"--color": "LightGray"}}  >
            <h5 className="habit-title">{props.name}</h5>
            {buttonElements}
        </div>
    )


}

export default Habit