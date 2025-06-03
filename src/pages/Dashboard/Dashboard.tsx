import { useQueryClient } from "@tanstack/react-query";
import { useGetCandidateById } from "../../services/Candidate/CandidateHooks";
import { useGetAllSkill_ReactQuery } from "../../services/Skills/SkillHoks";
import { useLogoutMutation } from "../../services/Auth/AuthHooks";
import { useNavigate } from "@tanstack/react-router";
import {
  useCreateCandidateSkillMutation,
  useDeleteCandidateSkillMutation,
} from "../../services/CandidateSkill/CandidateSkillHooks";
import CandidateCard from "../../cards/Cadidate/CandidateCard";
import SkillsCard from "../../cards/Skill/SkillsCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const candidateID = localStorage.getItem("ID");

  const { candidate } = useGetCandidateById(Number(candidateID));
  const { skills, isPending, error } = useGetAllSkill_ReactQuery();

  const removeSkillMutation = useDeleteCandidateSkillMutation();
  const addSkillMutation = useCreateCandidateSkillMutation();

  const handleToggleSkill = (skillId: number) => {
    if (!candidate) return null;

    const hasSkill = candidate.candidateSkills?.some((s) => s.skillId === skillId);

    const mutation = hasSkill
      ? removeSkillMutation.mutateAsync
      : addSkillMutation.mutateAsync;

    mutation({
      candidateId: Number(candidateID),
      skillId: skillId,
    }).then(() => {
      queryClient.invalidateQueries({ queryKey: ["candidate", Number(candidateID)] });
    });
  };

  const logoutMutation = useLogoutMutation();

  const handleLogOut = () => {
    logoutMutation.mutateAsync().then(() => navigate({ to: "/" }));
  };

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
            isLoading={addSkillMutation.isPending || removeSkillMutation.isPending}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
