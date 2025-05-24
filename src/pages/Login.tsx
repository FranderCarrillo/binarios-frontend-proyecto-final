import { useLoginMutation } from "../services/Auth/AuthHooks";

export default function Login() {
  const loginMutation = useLoginMutation();

  const handleLogin = () => {
      loginMutation.mutateAsync({
          email: 'jose@gmail.com',
          password: '1234'
        })
    .then(console.log);
    window.location.href = '/app/dashboard';
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <p>Página de login</p>
      <button onClick={handleLogin} className="btn btn-primary mt-2">
        Iniciar sesión
      </button>
    </div>
  );
}
