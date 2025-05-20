import axios from 'axios';
import apiAxios from './apiAxios'; // la instancia configurada
import type { Auth } from '../models/Auth/Auth';

export async function login(auth: Auth): Promise<boolean> {
  try {
    const response = await axios.post<string>('https://localhost:7038/api/Login', auth);

    const token = response.data;
    if (token) {
      localStorage.setItem('token', token);
      apiAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error en autenticación:", error);
    return false;
  }
}

export function logout(): void {
  localStorage.removeItem('token');
}
