import React, { useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([
        // Sample data
        { id: 1, name: "Project Alpha", tasks: 5, completed: 1 },
        { id: 2, name: "Project Beta", tasks: 10, completed: 7 },
        { id: 3, name: "Project Gamma", tasks: 8, completed: 8 },
    ]);

    const getColor = (completed, tasks) => {
        const percentage = (completed / tasks) * 100;
        if (percentage < 25) return "#910707";
        if (percentage < 75) return "#b08831";
        return "#32a86b";
    };

    return (
        <div className="project-container">
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", marginTop: 10 }}>Projects</h1>
            <button style={{ marginBottom: "1rem" }}>Create Project</button>
            <ul>
                {projects.map((project) => (
                    <li className="project w-screen flex flex-row text-left" key={project.id} style={{ marginBottom: "1rem" }}>
                        <div className="flex-col w-[30%] h-2 -mt-1">
                            <h2 className="text-2xl font-semibold text-blue-900">{project.name}</h2>
                            <div className="flex flex-row">
                                <p className="text-black font-bold">Tasks</p>
                                <p className="ml-1 font-bold" style={{ color: getColor(project.completed, project.tasks) }}>
                                    {project.completed}/{project.tasks}
                                </p>
                            </div>
                        </div>
                        <div className="ml-[70%] flex-row p-1">
                            <button className="right-0 w-30">details</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}