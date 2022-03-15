import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

    const [habits, setAllHabits] = useState([
        {name: "Read", frequency: [3, "week"]},
        {name: "Exercise", frequency: [1, "day"]},
        {name: "Skin Care", frequency: [2, "day"]}
    ])

    return (
        <Context.Provider value={{
            habits
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}