import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCreateCandidateSkillMutation, useDeleteCandidateSkillMutation } from "../../services/CandidateSkill/CandidateSkillHooks";
import { useLogoutMutation } from "../../services/Auth/AuthHooks";

export const useDashboardUtil = (candidate: any, Id: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addSkillMutation = useCreateCandidateSkillMutation();
  const removeSkillMutation = useDeleteCandidateSkillMutation();
  const logoutMutation = useLogoutMutation();
  
  const handleToggleSkill = async (skillId: number) => {
    if (!candidate) return;

    const hasSkill = candidate.candidateSkills?.some((s: {skillId: number}) => s.skillId === skillId);

    const mutation = hasSkill
      ? removeSkillMutation.mutateAsync
      : addSkillMutation.mutateAsync;

    await mutation({ candidateId: Id, skillId });
    queryClient.invalidateQueries({ queryKey: ["candidate", Id] });
  };

  const handleLogOut = async () => {
    await logoutMutation.mutateAsync();
    navigate({ to: "/" });
  };

  return {
    handleToggleSkill,
    handleLogOut,
    isSkillMutating: addSkillMutation.isPending || removeSkillMutation.isPending,
  };
};
