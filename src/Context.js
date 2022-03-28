import React, {useState} from "react"

import Data from "./Data"

const Context = React.createContext()

function ContextProvider({children}) {

    const [allHabits, setAllHabits] = useState(Data)

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

                return {completed: updatedCompleted, ...habit}
            }
            return habit
        })

        setAllHabits(updatedHabitsArr)
    }

    return (
        <Context.Provider value={{
            allHabits,
            updateComplete
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}