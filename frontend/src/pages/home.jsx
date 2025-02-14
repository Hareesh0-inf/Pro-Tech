import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="form-container">
            <h1>Home</h1>
            <div className="navigation-links">
                <Link to="/projects">Projects</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/notifications">Notifications</Link>
            </div>
            <div className="quick-actions">
                <button onClick={() => alert('Quick Action 1')}>Quick Action 1</button>
                <button onClick={() => alert('Quick Action 2')}>Quick Action 2</button>
            </div>
        </div>
    );
}