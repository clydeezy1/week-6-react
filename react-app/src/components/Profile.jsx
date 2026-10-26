import { useState } from "react";

function Profile() {
    const [name, setName] = useState("Clyde")
    const [age, setAge] = useState(35);
    const [hairColor, setHairColor] = useState("Black")
    const [isEnrolled, setIsEnrolled] = useState(false);

    return (
        <>
            <h2>{name}</h2>
            <p> Age: {age}</p>
            <p>Hair color: {hairColor}</p>
            <p>Status: {isEnrolled ? "Enrolled" : "Not enrolled"}</p>

            <button onClick={() => setName("Simpson")}>
                Change name
            </button>
            
            <button onClick={() => setAge(age + 10)}>
                Add 10 Years
            </button>
            
            <button onClick={() => setHairColor("Blue")}>
                Change hair color
            </button>

            <button onClick={() => setIsEnrolled (!isEnrolled)}>
                Toggle enrollment
            </button>
        
        </>
    );
}

export default Profile;
