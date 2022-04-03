import react, {useState, useContext} from "react";
import {Context} from "../Context"

import Header from "../components/Header";
import ColorRadio from "../components/ColorRadio"

function Habits() {
    // const [formData, setFormData] = useState({
    //     name: "",
    //     target: 0,
    //     frequency: 0,
    //     radio: "red"
    // })

    // function handleChange(event) {
    //     const {name, value, type, checked} = event.target;
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [name]: type === "checkbox" ? checked : value
    //         }
    //     })

    // }

    const {formData, handleChange} = useContext(Context);

    const colors = ["red", "green", "blue", "orange", "pink"];

    const colorElements = colors.map(color => 
        <ColorRadio
            key={color}
            color={color}
        />
    )

    return (
        <div className="habits-page">
            <h4>Habits</h4>
            <form className="habits-add-form">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Habit Name"
                    onChange={(event) => handleChange(event)}
                    value={formData.name}
                />
                <input 
                    type="number"
                    name="target"
                    placeholder="Target"
                    onChange={(event) => handleChange(event)}
                    value={formData.target}
                />
                <input 
                    type="number"
                    name="frequency"
                    placeholder="Frequency"
                    onChange={(event) => handleChange(event)}
                    value={formData.frequency}
                />

                <br/>
                
                <fieldset>
                    <legend>Pick a color:</legend>
                    {colorElements}
                </fieldset>
                
                
            </form>
            <p>{formData.radio}</p>
        </div>
    )
}

export default Habits