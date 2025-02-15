import React, { useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([
        // Sample data
        { id: 1, name: "Project Alpha", tasks: 10, completed: 5 },
        { id: 2, name: "Project Beta", tasks: 8, completed: 8 },
    ]);

    return (
        <div className="project-container">
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" ,marginTop:10 }}>Projects</h1>
            <button style={{ marginBottom: "1rem" }}>Create Project</button>
            <ul>
                {projects.map((project) => (
                    <li className="project w-screen flex flex-row text-left" key={project.id} style={{ marginBottom: "1rem" }}>
                        <div className="flex-col"> 
                        <h2>{project.name}</h2>
                        <p>Tasks: {project.tasks}</p>
                        <p>Completed: {project.completed}</p>
                        </div>
                        <div className="ml-[70%] flex-row p-3">
                        <button className="right-0 w-30">details</button>
                        </div>
                        
                    </li>
                    
                    
                ))}
            </ul>
        </div>
    );
}