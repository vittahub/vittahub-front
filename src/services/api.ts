export async function register(email: string, password: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro no registro.');
    }

    return data;
  } catch (error: unknown) {
    // Verificando se o erro é um objeto do tipo Error
    if (error instanceof Error) {
      throw new Error(error.message || 'Erro de conexão.');
    } else {
      throw new Error('Erro desconhecido ao registrar.');
    }
  }
}

export async function login(email: string, password: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro no login.');
    }

    return data;
  } catch (error: unknown) {
    // Verificando se o erro é um objeto do tipo Error
    if (error instanceof Error) {
      throw new Error(error.message || 'Erro de conexão.');
    } else {
      throw new Error('Erro desconhecido ao fazer login.');
    }
  }
}
