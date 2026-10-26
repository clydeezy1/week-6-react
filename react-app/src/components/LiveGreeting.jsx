import { useState } from "react";
function LiveGreeting() {
    const [name, setName] = useState("");

    return (
        <div>
            <label htmlFor="greetingName"> Your name: </label>
            <input
                id="greetingName"
                type="text"
                value={name}
                onChange={(e) => setName (e.target.value)}
            />

            <p>Hello, {name ? name : "stranger"}!</p>
        </div>
    );

}
export default LiveGreeting;