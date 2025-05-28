'use client';

import { useState } from 'react';
import { patientRegister } from '../services/api'; // <-- importa o serviço
import { Role, Sex } from '@/types/Enums';
import { Address } from '@/types/address';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '' as Role,
    birthdate: '',
    sex: '' as Sex,
    address: {street: 'nome da rua', number: 'numero', country: 'pais', city: 'cidade', zip_code: 'cep'} as Address,
    phone_1: '',
    phone_2: '',
    cpf: ''
  });

  const [message, setMessage] = useState('');


  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    if (name ===  'role') {
      setForm((prev) => ({...prev, role: value as Role}))
    }else if (name === 'sex') {
      setForm((prev) => ({...prev, sex: value as Sex}))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      await patientRegister(form);
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

        <input name="name" value={form.name} onChange={handleChange} placeholder="nome" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="senha" required />
        <input name="password_confirmation" type="password" value={form.password_confirmation} onChange={handleChange} placeholder="confirmar senha" required />
        <input name="role" value={form.role} onChange={handleChange} placeholder="role" required />
        <input name="birthdate" type="date" value={form.birthdate} onChange={handleChange} placeholder="nascimento" required />
        <input name="sex" value={form.sex} onChange={handleChange} required />
        <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="CPF" required />
        <input name="phone_1" value={form.phone_1} onChange={handleChange} placeholder="telefone 1" required />
        <input name="phone_2" value={form.phone_2} onChange={handleChange} placeholder="telefone 2 (opcional)" />


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
