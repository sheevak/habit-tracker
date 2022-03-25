import React, {useState, useContext} from "react"

import {Context} from "../Context"

function Habit(props) {

    const {allHabits, updateComplete} = useContext(Context)

    const completed = props.completed.filter(obj => obj.date == props.day);
    //const [count, setCount] = useState(completed.length === 1 ? completed[0].count: 0);

    let count = completed.length === 1 ? completed[0].count: 0;

    function complete() {
        count += 1
        updateComplete(props.day, props.id, count)
    }

    return (
        <div className="day-habit">
                <p className="day-habit-button">
                    {props.name}
                </p>
                <button onClick={complete} className="pie" style={{"--width":"20px", "--percentage": count/props.frequency[0]*100, "--color": "red"}} ></button>
                

        </div>
    )
}

export default Habit