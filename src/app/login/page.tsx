'use client';
import { login } from '../../services/api';
import { useState } from 'react';

export default function Home() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');

async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
    // Chama a função de login
    const data = await login(email, password);

    // Armazenar o token no localStorage
    localStorage.setItem('authToken', data.token);
    setMessage('Login bem-sucedido!');
    } catch (error: unknown) {
    if (error instanceof Error) {
        setMessage(`Erro: ${error.message}`);
    } else {
        setMessage('Erro desconhecido.');
    }
    }
}


return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <main className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm">
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 rounded"
        />

        <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Entrar
        </button>
        </form>

        {message && <p className="mt-4 text-center">{message}</p>}
    </main>
    </div>
);
}
