import { useForm } from '@tanstack/react-form';
import { useLoginMutation } from '../../services/Auth/AuthHooks';
import { AuthInitialState } from '../../models/Auth/Auth';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'react-toastify';
import { handleApiError } from '../../utils/handleApiError';

export default function Login() {
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: AuthInitialState,
    onSubmit: async ({ value }) => {
      try {
        await loginMutation.mutateAsync(value);
        toast.success('¡Acceso exitoso!', { position: "top-right", autoClose: 3000 });
        navigate({ to: '/app/dashboard' });
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
            validators={{
              onChange: ({ value }) => {
                if (!value) return 'El correo es obligatorio';
                if (!value.includes('@')) return 'Agregue @ a su dirección Email';
                if (!value.includes('.')) return 'Correo no válido';
              },
            }}
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
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Correo electrónico"
                  />
                </div>
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                if (!value || value.trim() === '') {
                  return 'La contraseña es obligatoria';
                }
                return undefined;
              },
            }}
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
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Contraseña"
                  />
                </div>
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
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
