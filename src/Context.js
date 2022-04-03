import React, {useState} from "react"

import Data from "./Data"

const Context = React.createContext()

function ContextProvider({children}) {

    const [allHabits, setAllHabits] = useState(Data)

    const [formData, setFormData] = useState({
        name: "",
        target: "",
        frequency: "",
        radio: "red"
    })

    function updateComplete(date, habitId, newCount) {
        const updatedHabitsArr = allHabits.map(habit => {
            if (habitId === habit.id) {
                let updatedCompleted;
                if (habit.completed.filter(obj => obj.date === date).length > 0) {
                    updatedCompleted = habit.completed.map(obj => {
                        if (obj.date === date) {
                            obj.count = newCount
                        }
                        return obj
                    })
                } else {
                    updatedCompleted = habit.completed.push({date: date, count: newCount})
                }

                let updatedTotal = habit.total;

                if (newCount === habit.frequency[0]) {
                    updatedTotal += 1;
                }

                return {completed: updatedCompleted, ...habit, total: updatedTotal}
            }
            return habit
        })

        setAllHabits(updatedHabitsArr);
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }

    return (
        <Context.Provider value={{
            allHabits,
            updateComplete,
            formData,
            handleChange,
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}