import react, {useState, useContext} from "react";
import {Context} from "../Context"

import Header from "../components/Header";
import ColorRadio from "../components/ColorRadio"

function Habits() {
    const {formData, handleChange} = useContext(Context);

    const colors = ["red", "green", "blue", "orange", "pink", "navy", "tomato", "lime"];

    const colorElements = colors.map(color => 
        <ColorRadio
            key={color}
            color={color}
        />
    )

    function handleSubmit (event) {
        event.preventDefault()
        console.log("submitted")
    }

    return (
        <div className="habits-page">
            <h4>Habits</h4>
            <div className="habits-add-container">
                <form className="habits-add-form" onSubmit={(event) => handleSubmit(event)}>
                    <h2>Add A New Habit</h2>

                    <label htmlFor="name">
                        Habit Name:
                    </label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={(event) => handleChange(event)}
                        value={formData.name}
                    />

                    <label htmlFor="target">
                        Daily Target:
                    </label>
                    <input 
                        type="number"
                        name="target"
                        id="target"
                        placeholder="Target"
                        onChange={(event) => handleChange(event)}
                        value={formData.target}
                    />

                    <label htmlFor="frequency">
                        Weekly Target:
                    </label>
                    <input 
                        type="number"
                        name="frequency"
                        id="frequency"
                        placeholder="Frequency"
                        onChange={(event) => handleChange(event)}
                        value={formData.frequency}
                    />
                    
                    <legend htmlFor="radio">Pick a color:</legend>
                    <fieldset>
                        {colorElements}
                    </fieldset>
                    <button type="submt" className="habit-add-submit">
                        Submit
                    </button>
                    
                </form>
            </div>
        </div>
    )
}

export default Habits