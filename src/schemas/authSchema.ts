import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty('El correo es obligatorio')
    .email('Correo inválido'),
  password: z.string().min(1, 'La contraseña es obligatoria'),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, "Debe tener al menos 1 caracter"),
  surname1: z.string().min(3, "Debe tener al menos 3 caracteres"),
  surname2: z.string().min(3, "Debe tener al menos 3 caracteres"),
  email: z.string().email("Correo no válido"),
  password: z.string().min(6, "Debe tener al menos 6 caracteres"),
});