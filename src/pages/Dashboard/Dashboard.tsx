import { useQueryClient } from "@tanstack/react-query";
import { useGetCandidateById } from "../../services/Candidate/CandidateHooks";
import { useGetAllSkill_ReactQuery } from "../../services/Skills/SkillHoks";
import { useLogoutMutation } from "../../services/Auth/AuthHooks";
import { useNavigate } from "@tanstack/react-router";
import {
  useCreateCandidateSkillMutation,
  useDeleteCandidateSkillMutation,
} from "../../services/CandidateSkill/CandidateSkillHooks";

const Dashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const candidateID = localStorage.getItem("ID");

  const { candidate } = useGetCandidateById(Number(candidateID));
  const { skills, isPending, error } = useGetAllSkill_ReactQuery();

  const removeSkillMutation = useDeleteCandidateSkillMutation();
  const addSkillMutation = useCreateCandidateSkillMutation();

  const handleToggleSkill = (skillId: number) => {
    if (!candidate) return;

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
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-md p-8">
        <section className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-[#16425B]">Bienvenido, {candidate?.name}</h1>
          <h2 className="text-lg text-[#2F6690]">{candidate?.surname1}</h2>
          <p className="text-sm text-gray-700 mt-2">Correo: {candidate?.email}</p>
        </section>

        <section className="skills-candidate text-center">
          <h2 className="text-2xl font-semibold text-[#2F6690] mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills?.map((skill) => {
              const isSelected = candidate?.candidateSkills?.some(
                (s) => s.skillId === skill.skillId
              );

              return (
                <button
                  key={skill.skillId}
                  onClick={() => handleToggleSkill(skill.skillId)}
                  disabled={addSkillMutation.isPending || removeSkillMutation.isPending}
                  className={`px-4 py-2 rounded-full border transition text-sm font-medium
                    ${
                      isSelected
                        ? "bg-[#2F6690] text-white border-[#2F6690] hover:bg-[#16425B]"
                        : "bg-white text-[#2F6690] border-[#2F6690] hover:bg-[#E1EEF3]"
                    }`}
                >
                  {skill.name}
                </button>
              );
            })}
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLogOut}
            className="px-6 py-2 bg-[#3A7CA5] text-white rounded-md hover:bg-[#2F6690] font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
