import { useLoggedInCandidate } from "../services/Auth/AuthHooks";

const Dashboard = () => {
  const { data: user } = useLoggedInCandidate();

  return (
    <div>
      <h1>Bienvenido, {user?.sub}</h1>
      <p>Correo: {user?.email}</p>
    </div>
  );
};

export default Dashboard;
