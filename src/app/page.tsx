'use client';

import { useState } from 'react';
import { register } from '../services/api'; // <-- importa o serviço

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    try {
      await register(email, password);
      setMessage('Usuário registrado com sucesso!');
  } catch (error: unknown) {
    console.error(error);

    if (error instanceof Error) {
      setMessage(error.message || 'Erro ao registrar.');
    } else {
      setMessage('Erro ao registrar.');
    }
  }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <main className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Registrar Usuário</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-sm">
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
            Registrar
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center">{message}</p>
        )}
      </main>

      <footer className="mt-8">
        {/* Pode colocar algo no footer depois */}
      </footer>
    </div>
  );
}
