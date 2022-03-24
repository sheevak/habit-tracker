import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Calendar from "./pages/Calendar"
import Habits from "./pages/Habits"
import Profile from "./pages/Profile"

function App() {
    return (
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/habits" element={<Habits />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </div>
        
    )
}

export default App