import react, {useContext} from "react"
import {Context} from "../Context"

function ColorRadio({color}) {
    const {formData, handleChange} = useContext(Context);

    console.log("render")



    return (
        <label className="radio-container" htmlFor={color}>
            <input 
                type="radio"
                name="radio"
                id={color}
                className="radio"
                value={color}
                checked={formData.radio === color}
                onChange={(event) => handleChange(event)}
            />
            <span 
                className="checkmark" 
                style={{
                    "--colorRadio": color
                }} 
            ></span>
        </label>
    )
}

export default ColorRadio