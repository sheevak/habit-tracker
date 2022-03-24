import React, {useState} from "react"

import Data from "./Data"

const Context = React.createContext()

function ContextProvider({children}) {

    const [habits, setAllHabits] = useState(Data)

    return (
        <Context.Provider value={{
            habits
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}