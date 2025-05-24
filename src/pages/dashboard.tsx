import { useLoggedInCandidate } from "../services/Auth/AuthHooks";
import { useGetCandidateById } from "../services/Candidate/CandidateHooks";

const Dashboard = () => {
  const { data: user } = useLoggedInCandidate();
  
  const { candidate } = useGetCandidateById(Number(user?.sub));

  return (
    <div>
      <h1>Bienvenido, {candidate?.email}</h1>
      <p>Correo: {candidate?.email}</p>
    </div>
  );
};

export default Dashboard;
