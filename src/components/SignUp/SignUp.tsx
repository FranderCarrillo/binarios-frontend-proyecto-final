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
        toast.success("¡Registro exitoso!", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate({ to: "/" });
      } catch (error) {
        toast.error("Ocurrió un error al registrar. Por favor, intenta de nuevo.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    },
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#D9DCD6] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-[#16425B] mb-2 text-center">Cuenta Nueva</h2>
        <div className="h-1 w-16 bg-[#2F6690] mx-auto mb-6 rounded"></div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-5"
        >
          <form.Field
            name="name"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "El nombre es obligatorio";
              },
            }}
          >
            {(field) => (
              <>
                <label htmlFor={field.name} className="block text-sm font-medium text-[#2F6690]">
                  Nombre *
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Nombre"
                  className="w-full px-4 py-2 border border-[#2F6690] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#81C3D7] text-[#16425B]"
                />
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-600 text-xs mt-1">{field.state.meta.errors[0]}</p>
                )}
              </>
            )}
          </form.Field>

          <form.Field
            name="surname1"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "El primer apellido es obligatorio";
              },
            }}
          >
            {(field) => (
              <>
                <label htmlFor={field.name} className="block text-sm font-medium text-[#2F6690]">
                  Apellido *
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Primer Apellido"
                  className="w-full px-4 py-2 border border-[#2F6690] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#81C3D7] text-[#16425B]"
                />
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-600 text-xs mt-1">{field.state.meta.errors[0]}</p>
                )}
              </>
            )}
          </form.Field>

          <form.Field
            name="surname2"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "El segundo apellido es obligatorio";
              },
            }}
          >
            {(field) => (
              <>
                <label htmlFor={field.name} className="block text-sm font-medium text-[#2F6690]">
                  Segundo Apellido
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Segundo Apellido"
                  className="w-full px-4 py-2 border border-[#2F6690] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#81C3D7] text-[#16425B]"
                />
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-600 text-xs mt-1">{field.state.meta.errors[0]}</p>
                )}
              </>
            )}
          </form.Field>

          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "El correo es obligatorio";
                if (!value.includes("@")) return "Agregue @ a su dirección Email";
                if (!value.includes(".")) return "Correo no válido";
              },
            }}
          >
            {(field) => (
              <>
                <label htmlFor={field.name} className="block text-sm font-medium text-[#2F6690]">
                  Correo Electrónico *
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-2 border border-[#2F6690] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#81C3D7] text-[#16425B]"
                />
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-600 text-xs mt-1">{field.state.meta.errors[0]}</p>
                )}
              </>
            )}
          </form.Field>

          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "La contraseña es obligatoria";
              },
            }}
          >
            {(field) => (
              <>
                <label htmlFor={field.name} className="block text-sm font-medium text-[#2F6690]">
                  Contraseña *
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full px-4 py-2 border border-[#2F6690] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#81C3D7] text-[#16425B]"
                />
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-600 text-xs mt-1">{field.state.meta.errors[0]}</p>
                )}
              </>
            )}
          </form.Field>

          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full py-3 text-white bg-[#3A7CA5] hover:bg-[#2F6690] transition rounded-md font-semibold"
              >
                {isSubmitting ? "Registrando..." : "Registrarse"}
              </button>
            )}
          </form.Subscribe>
        </form>

        <p className="text-center mt-6 text-sm text-[#16425B]">
          ¿Ya tenés una cuenta?{" "}
          <a
            onClick={() => navigate({ to: "/" })}
            className="text-[#2F6690] hover:underline font-medium cursor-pointer"
          >
            Iniciá sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
