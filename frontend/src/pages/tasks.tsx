import React, { useState, useEffect } from "react";

interface Task {
    id: number;
    title: string;
    status: "Pending" | "In Progress" | "Completed";
}

export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        // Fetch tasks from an API or define them statically for now
        const fetchedTasks: Task[] = [
            { id: 1, title: "Task 1", status: "Pending" },
            { id: 2, title: "Task 2", status: "In Progress" },
            { id: 3, title: "Task 3", status: "Completed" },
        ];
        setTasks(fetchedTasks);
    }, []);

    return (
        <div className="task-container">
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li className="task flex-col" key={task.id}>
                        <h2 className="relative text-left">{task.title}</h2>
                        <p className="relative text-left">Status: {task.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}