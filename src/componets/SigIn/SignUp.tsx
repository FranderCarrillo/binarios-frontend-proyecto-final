import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";

const SignUp = () => {
  const createCandidateMutation = useCreateCandidateMutation();

  const navigate = useNavigate();

    const form = useForm({
        defaultValues: CandidateInitialState,
        onSubmit: async ({ value }) => {
          // Do something with form data
          console.log(value)
          createCandidateMutation.mutateAsync(value);
        },
      })

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
              className="form-body"
            >
              <form.Field
                name="name"
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

              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <button type="submit" disabled={!canSubmit}>
                    {isSubmitting ? '...' : 'Registrarse'}
                  </button>
                )}
              />
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