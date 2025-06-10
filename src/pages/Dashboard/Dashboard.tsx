import { useGetCandidateById } from "../../services/Candidate/CandidateHooks";
import { useGetAllSkills } from "../../services/Skills/SkillHoks";
import CandidateCard from "../../cards/Cadidate/CandidateCard";
import SkillsCard from "../../cards/Skill/SkillsCard";
import { useDashboardUtil } from "../../utils/Dashboard/dashboardUtil";
import { getLoggedIn } from "../../utils/auth";

const Dashboard = () => {
  const tokenDecode = getLoggedIn();
  const { candidate } = useGetCandidateById(tokenDecode?.Id || 0);
  const Id = candidate?.id || 0;
  const { skills } = useGetAllSkills();

  const {
    handleToggleSkill,
    handleLogOut,
    isSkillMutating
  } = useDashboardUtil(candidate, Id);

  return (
    <div className="min-h-screen bg-[#D9DCD6] p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        <div className="bg-white w-full md:w-1/2 rounded-xl shadow-md p-6 flex flex-col justify-between">
          <CandidateCard candidateInfo={candidate} />
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleLogOut}
              className="px-6 py-2 bg-[#3A7CA5] text-white rounded-md hover:bg-[#2F6690] font-semibold"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
        <div className="bg-white w-full md:w-1/2 rounded-xl shadow-md p-6">
          <SkillsCard
            skills={skills}
            candidate={candidate}
            onToggle={handleToggleSkill}
            isLoading={isSkillMutating}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
