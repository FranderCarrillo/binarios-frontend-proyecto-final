import { useForm } from '@tanstack/react-form';
import { useLoginMutation } from '../../services/Auth/AuthHooks';
import { AuthInitialState } from '../../models/Auth/Auth';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'react-toastify';
import { handleApiError } from '../../utils/handleApiError';
import { useState } from 'react';
import { loginSchema } from '../../schemas/authSchema';

export default function Login() {
  const loginMutation = useLoginMutation();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: AuthInitialState,
    onSubmit: async ({ value }) => {
      const validation = loginSchema.safeParse(value);
        if (!validation.success) {
          const errors: Record<string, string> = {};
            validation.error.errors.forEach((err) => {
            const field = err.path[0] as string;
            errors[field] = err.message;
          });
          setFormErrors(errors);
          return;
        }

      try {
        await loginMutation.mutateAsync(value);
        toast.success('¡Acceso exitoso!', { position: "top-right", autoClose: 3000 });
        navigate({ to: '/user/dashboard' });
      } catch (error: any) {
        handleApiError(error, 'Error al ingresar. Por favor, intenta de nuevo.');
      }
    },
  });

  return (  
    <div className="min-h-screen w-full bg-[#D9DCD6] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#2F6690]">Inicio de Sesión</h2>
        <div className="h-1 bg-[#81C3D7] my-4 rounded"></div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          <form.Field
            name="email"
          >
            {(field) => (
              <div>
                <label htmlFor="email" className="block text-[#16425B] font-medium mb-1">Correo</label>
                <div className="flex items-center border border-[#3A7CA5] rounded-lg overflow-hidden">
                  {/* <span className="bg-[#3A7CA5] text-white px-3 py-2">👤</span> */}
                  <input
                    id="email"
                    className="w-full p-2 outline-none text-[#16425B]"
                    type="email"
                    value={field.state.value}
                    onChange={(e) => {field.handleChange(e.target.value);
                    setFormErrors((prev) => ({ ...prev, [field.name]: "" }));
                    }
                    }
                    placeholder="Correo electrónico"
                  />
                </div>
                {formErrors[field.name] && (
                    <p style={{ color: "red", fontSize: "0.8rem" }}>{formErrors[field.name]}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="password"
          >
            {(field) => (
              <div>
                <label htmlFor="password" className="block  font-medium mb-1 text-[#16425B]">Contraseña</label>
                <div className="flex items-center border border-[#3A7CA5] rounded-lg overflow-hidden">
                  {/* <span className="bg-[#3A7CA5] text-white px-3 py-2">🔒</span> */}
                  <input
                    id="password"
                    className="w-full p-2 outline-none text-[#16425B]"
                    type="password"
                    value={field.state.value}
                    onChange={(e) => {field.handleChange(e.target.value);
                    setFormErrors((prev) => ({ ...prev, [field.name]: "" }));
                    }
                    }
                    placeholder="Contraseña"
                  />
                </div>
                {formErrors[field.name] && (
                    <p style={{ color: "red", fontSize: "0.8rem" }}>{formErrors[field.name]}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                className="w-full bg-[#3A7CA5] text-white py-2 rounded-lg font-semibold hover:bg-[#2F6690] transition"
                disabled={!canSubmit}
              >
                {isSubmitting ? '...' : 'Iniciar sesión'}
              </button>
            )}
          </form.Subscribe>
        </form>

        <div className="text-center text-sm text-[#16425B] mt-6">
          ¿No tenés una cuenta?{' '}
          <button className="text-[#2F6690] underline hover:text-[#16425B]" onClick={() => navigate({ to: '/logout' })}>
            Registrate
          </button>
        </div>
      </div>
    </div>
  );
}
