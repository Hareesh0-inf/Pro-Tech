import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== "password" || email !== "user@example.com") {
            alert("Passwords or email do not match!");
            return;
        }
        console.log("Email:", email);
        console.log("Password:", password);
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        window.location.href = "/";
    };

    return (
        <div className="h-screen flex">
            <div className="form-container flex-col">
                <h1 className="pb-3 font-bold text-green-500">Login</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label className="mt-3.5 self-start">Email</label>
                        <input
                            className="p-1.5 bg-amber-50 border rounded-b-sm text-black"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mt-3 self-start">Password</label>
                        <input
                            className="p-1.5 bg-amber-50 border rounded-b-sm text-black"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="rounded-md">Login</button>
                    <Link to="/register" className="mt-4 text-blue-500">Don't have an account? Register</Link>
                </form>
            </div>
        </div>
    );
}
