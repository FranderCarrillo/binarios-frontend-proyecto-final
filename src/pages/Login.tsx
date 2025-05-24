export default function Login() {
  const login = () => {
    localStorage.setItem('token', '123');
    window.location.href = '/app/dashboard';
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <p>Página de login</p>
      <button onClick={login} className="btn btn-primary mt-2">
        Iniciar sesión
      </button>
    </div>
  );
}
