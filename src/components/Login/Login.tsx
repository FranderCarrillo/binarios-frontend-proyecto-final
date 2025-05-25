import { useForm } from '@tanstack/react-form';
import { useLoginMutation } from '../../services/Auth/AuthHooks';
import { AuthInitialState } from '../../models/Auth/Auth';
import { useNavigate } from '@tanstack/react-router';
import './Login.css';
import { toast } from 'react-toastify';

export default function Login() {
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: AuthInitialState,
    onSubmit: async ({ value }) => {
      try {
        await loginMutation.mutateAsync(value);
        toast.success('Acceso exitoso!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
                progress: undefined,
        });
        navigate({ to: '/app/dashboard' });
      } catch (error) {
        toast.error('Ocurrió un error al ingresar. Por favor, intenta de nuevo.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      
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
              <>
                <div className="login-field">
                  <span className="login-field-icon">👤</span>
                  <input
                    id="email"
                    className="login-input"
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Enter your username"
                  />
                </div>

                {/* Aquí va el error, afuera del div */}
                {field.state.meta.errors?.length > 0 && (
                  <span className="error-message">{field.state.meta.errors[0]}</span>
                )}
              </>
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
              <>
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
                </div>

                {/* Error fuera del contenedor */}
                {field.state.meta.errors?.length > 0 && (
                  <span className="error-message">{field.state.meta.errors[0]}</span>
                )}
              </>
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
