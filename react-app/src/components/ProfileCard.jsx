export default function ProfileCard({
    name,
    role = "Student",
    isOnline,
    skills,
}) {

return (
    <div className="card">
        <h3>{name}</h3>
        <p>Role: {role}</p>
        <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
        <p>Skills: {skills.join(", ")}</p>
    </div>
);
}