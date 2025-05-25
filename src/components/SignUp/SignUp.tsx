import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { useCreateCandidateMutation } from "../../services/Candidate/CandidateHooks";
import { CandidateInitialState } from "../../models/Candidate/Candidate";
import { toast } from "react-toastify";

const SignUp = () => {
  const createCandidateMutation = useCreateCandidateMutation();

  const navigate = useNavigate();

    const form = useForm({
    defaultValues: CandidateInitialState,
    onSubmit: async ({ value }) => {
      try {
        await createCandidateMutation.mutateAsync(value);
        toast.success('¡Registro exitoso!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate({ to: '/' });
      } catch (error) {
        toast.error('Ocurrió un error al registrar. Por favor, intenta de nuevo.', {
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
        <div className="form-container">
          <div className="form-card">
            <h1 className="form-title">Cuenta Nueva</h1>
            <div className="form-underline"></div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              /*className="form-body"*/
            >
              <div className="form-body">
              <form.Field
                name="name"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) return 'El nombre es obligatorio';
                  },
                }}
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>Nombre *</label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </>
                )}
              />

              <form.Field
                name="surname1"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) return 'El primer apellido es obligatorio';
                  },
                }}
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>Apellido *</label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </>
                )}
              />

              <form.Field
                name="surname2"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) return 'El segundo apellido es obligatorio';
                  },
                }}
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>Segundo Apellido</label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </>
                )}
              />

              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) return 'El correo es obligatorio';
                    if (!value.includes('@')) return 'Agregue @ a su direccion Email';
                    if (!value.includes('.')) return 'Correo no válido';
                  },
                }}
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>Correo Electrónico *</label>
                    <input
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </>
                )}
              />

              <form.Field
                name="password"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) return 'La contraseña es obligatoria';
                  },
                }}
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>Contraseña *</label>
                    <input
                      id={field.name}
                      name={field.name}
                      type="password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </>
                )}
              />
              </div>
              <div className="register-wrapper">
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <button type="submit" disabled={!canSubmit}className="register-button">
                    {isSubmitting ? '...' : 'Registrarse'}
                  </button>
                )}
              />
              </div>
            </form>

            <p className="form-footer">
              ¿Ya tenés una cuenta?
              <a onClick={() => navigate({ to: '/' })}>Iniciá sesión</a>
            </p>
          </div>
        </div>

      )
}

export default SignUp