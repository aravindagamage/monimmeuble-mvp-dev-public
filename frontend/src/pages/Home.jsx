import { useState } from "react";

const Home = () => {
    const [section, setSection] = useState("Dashboard");

    return (
        <div style={{ display: "flex" }}>
            <nav style={{ width: "200px", background: "#ddd", padding: "10px" }}>
                {["Dashboard", "Planner", "Valuation", "Budget", "Inspections", "Suppliers", "Financing", "Utilities", "Assistant", "Alerts", "Settings", "Account"].map((item) => (
                    <p key={item} onClick={() => setSection(item)}>{item}</p>
                ))}
            </nav>
            <main style={{ flex: 1, padding: "20px" }}>
                <h2>{section}</h2>
            </main>
        </div>
    );
};

export default Home;
