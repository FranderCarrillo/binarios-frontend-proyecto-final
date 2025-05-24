import { useForm } from '@tanstack/react-form';
import { useLoginMutation } from '../services/Auth/AuthHooks';
import { AuthInitialState } from '../models/Auth/Auth';
import { useNavigate } from '@tanstack/react-router';

export default function Login() {
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm({
  defaultValues: AuthInitialState,
  onSubmit: async ({ value }) => {
    await loginMutation.mutateAsync(value);
    navigate({ to: '/app/dashboard' });
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

        <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? '...' : 'Submit'}
                </button>
              )}
        />
      </form>

      <button onClick={() => navigate({ to: '/logout' })}>Registrate</button>
    </div>
  );
}
