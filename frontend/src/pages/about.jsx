import React from "react";

export default function About() {
    return (
        <div className="about-container h-screen" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', padding: '20px', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ color: '#2c3e50', marginTop: 5}}>About Pro-Tech</h1>
            <p>Pro-Tech is a web application designed for teams to efficiently manage projects, assign tasks, track progress, and communicate.</p>
            
            <hr style={{ border: '1px solid red' , marginTop: 5}} />
            
            <h2 style={{ color: '#34495e', marginTop: 10 }}>Overview</h2>
            <p>Our platform enables project managers to create projects and assign tasks, while allowing team members to confirm task completion and ask doubts. It provides an intuitive workflow to track project progress and deadlines.</p>
            
            <hr style={{ border: '1px solid red' , marginTop: 10}} />
            
            <h2 style={{ color: '#34495e' , marginTop: 10}}>Features</h2>
            <ul>
                <li><strong>Project Creation & Management:</strong> Assign tasks, set deadlines, and track progress.</li>
                <li><strong>Task Management:</strong> View assigned tasks, update statuses, and raise doubts.</li>
                <li><strong>Collaboration Tools:</strong> Comment on tasks and get notified of updates.</li>
                <li><strong>Role-Based Access:</strong> Project Managers and Team Members with specific permissions.</li>
                <li><strong>Notifications:</strong> Alerts for task updates, doubts, and deadlines.</li>
            </ul>
        </div>
    );
}