import React, { useState } from "react";
import { login } from "../auth/authService";

interface LoginProps {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function Login({ setIsLoggedIn }: LoginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (login(username, password)) {
            setIsLoggedIn(true);
        } else {
            // Handle login failure (e.g., show an error message)
        }
    };

    return (
        <div className="form-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
