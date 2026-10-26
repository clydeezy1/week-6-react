import { useState } from "react";

function ColorPicker () {
    const [color, setColor] = useState("");

    return (
        <div>
            <label htmlFor="color"> Input your color</label>
            <input 
                id="color"
                type="text"
                value={color}
                onChange={e => setColor(e.target.value)}
            />

            <p>Your color is: {color || "not selected"}</p>
        </div>
    );



}


export default ColorPicker;