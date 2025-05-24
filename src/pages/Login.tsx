import { useForm } from '@tanstack/react-form';
import { useLoginMutation } from '../services/Auth/AuthHooks';
import type { Auth } from '../models/Auth/Auth';

export default function Login() {
  const loginMutation = useLoginMutation();

  const form = useForm({
  defaultValues: {
    email: '',
    password: '',
    role: 'CANDIDATE',
  } satisfies Auth,
  onSubmit: async ({ value }) => {
    await loginMutation.mutateAsync(value);
    window.location.href = '/app/dashboard';
  },
});


  return (
    <div className="">
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        
        <form.Field name="email">
          {(field) => (
            <div>
              <label htmlFor="email" >Correo electrónico</label>
              <input
                id="email"
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>

        
        <form.Field name="password">
          {(field) => (
            <div>
              <label htmlFor="password" >Contraseña</label>
              <input
                id="password"
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>

        <div>
          <button
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}
