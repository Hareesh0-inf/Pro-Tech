import React from "react";
import { Link } from "react-router-dom";
import Projects from "./projects";

export default function Home() {
    let upcomingDeadlines = [
            // Sample data
            { id: 1, name: "Project Alpha", tasks: 5, completed: 1 },
            { id: 2, name: "Project Beta", tasks: 10, completed: 7 },
            { id: 3, name: "Project Gamma", tasks: 8, completed: 8 },
    ];

    return (
        <div className="home-container">
            <div className="flex flex-row">
            <h1 style={{ fontSize: "2rem",width: "75%", fontWeight: "bold", marginBottom: "1rem", marginTop: "1rem" }}>Dashboard</h1>
            <div className="quick-access w-[20%]">
                <h2>Quick Access</h2>
                <Link to="/tasks">Pending Tasks</Link>
            </div>
            </div>
            <div className="flex flex-row h-70">
            <div className="overview h-full w-[75%]">
                <div className="dead">{
                    upcomingDeadlines.map((pr) => {
                        return (
                            <div className="task" key={pr.id} style={{ marginBottom: "1rem" }}>
                               <h1>{pr.name}</h1>
                            </div>
                        )
                    })}</div>
                <h2>Upcoming Deadlines</h2>
            </div>
            
            <div className="notifications h-min-[50%] w-[20%] border-green-500 border-1">
                <h2>Notifications</h2>
                {/* Add logic to display notifications */}
                <p>No new notifications.</p>
            </div>
            </div>
        </div>
    );
}