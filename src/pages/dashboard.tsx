import { useLoggedInCandidate } from "../services/Auth/AuthHooks";
import { useGetCandidateById } from "../services/Candidate/CandidateHooks";


const Dashboard = () => {
  const { data: user } = useLoggedInCandidate();
  
  const { candidate } = useGetCandidateById(Number(user?.sub));

  return (
    <div className="MyProfile">
        <section className="info-candidate">
          <h1>Bienvenido, {candidate?.email}</h1>
          <p>Correo: {candidate?.email}</p>
          </section>
        <section className="skills-candidate">
          <h2>Skills</h2>
          <div className="buttons-skills">
            
          </div>
        </section>
    </div>
  );

};

export default Dashboard;
