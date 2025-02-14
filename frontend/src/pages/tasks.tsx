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
        <div className="form-container">
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h2>{task.title}</h2>
                        <p>Status: {task.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}