"use client";

import { useState } from "react";

export default function PreviewLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/preview-auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            window.location.href = "/";
        } else {
            setError("Senha incorreta!");
        }
    }

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem"
        }}>
            <h2>Área restrita</h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: 300 }}>
                <input
                    type="password"
                    placeholder="Digite a senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
                />
                <button type="submit" style={{ padding: 10 }}>Entrar</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
