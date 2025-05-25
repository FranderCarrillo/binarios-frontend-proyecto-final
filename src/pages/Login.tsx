import { useForm } from '@tanstack/react-form';
import { useLoginMutation } from '../services/Auth/AuthHooks';
import { AuthInitialState } from '../models/Auth/Auth';
import { useNavigate } from '@tanstack/react-router';
import './Login.css';

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
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-title">Inicio Sesión</div>
        <div className="login-title-underline"></div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <form.Field name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value) return 'El correo es obligatorio';
              if (!value.includes('@')) return 'Agregue @ a su direccion Email';
              if (!value.includes('.')) return 'Correo no válido';
            },
          }}

          >
            {(field) => (
              <div className="login-field">
                <span className="login-field-icon">👤</span>
                <input
                  id="email"
                  className="login-input"
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="enter your username"
                />
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
              <div className="login-field">
                <span className="login-field-icon">🔒</span>
                <input
                  id="password"
                  className="login-input"
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your password"
                />
                {field.state.meta.errors?.length > 0 && (
                  <span className="error-message">{field.state.meta.errors[0]}</span>
                )}
              </div>
            )}
          </form.Field>


          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <button type="submit" className="login-button" disabled={!canSubmit}>
                {isSubmitting ? '...' : 'Sign In'}
              </button>
            )}
          </form.Subscribe>
        </form>

        <div className="login-footer">
          ¿No tenés una cuenta?{' '}
          <a onClick={() => navigate({ to: '/logout' })}>Registrate</a>
        </div>
      </div>
    </div>
  );
}
