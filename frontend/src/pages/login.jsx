import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== "password" || email !== "user") {
            alert("Passwords or email do not match!");
            return;
        }
        console.log("Email:", email);
        console.log("Password:", password);
        setIsLoggedIn(prev => !prev);
        window.location.href = "/";
    };

    return (
        <div className="justify-center items-center h-screen flex">
            <div className="form-container flex-col">
                <h1 className="pb-3">Login</h1>
                <form className="flex flex-row" onSubmit={handleSubmit}>
                    <div className="flex flex-col -mt-3">
                        <label className="mt-3.5 mr-2">Email:</label>
                        <label className="mt-3 mr-2">Password:</label>
                    </div>
                    <div className="flex flex-col">
                        <input
                            className="mb-4 bg-amber-50 border rounded-md text-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className="mb-4 bg-amber-50 border rounded-md text-black"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="rounded-md">Login</button>
                        <Link to="/register" className="mt-4 text-blue-500">Don't have an account? Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
