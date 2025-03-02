import React, { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleHomeRedirect = () => {
        window.location.href = "/home";
    };

    return (
        <div className="justify-center items-center h-screen flex">
            <div className="form-container flex-col">
                <h1 className="pb-3">Register</h1>
                <form className="flex flex-row" onSubmit={handleSubmit}>
                    <div className="flex flex-col -mt-3">
                        <label className="mt-3.5 mr-2">Email:</label>
                        <label className="mt-3 mr-2">Password:</label>
                        <label className="mt-3 mr-2">Confirm Password:</label>
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
                        <input
                            className="mb-4 bg-amber-50 border rounded-md text-black"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit" onClick={handleHomeRedirect}  className="rounded-md">Register</button>
                        <a href="/login" className="text-cyan-400 -ml-10">Already have an account? Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}