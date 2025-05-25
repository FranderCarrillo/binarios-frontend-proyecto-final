import { useMutation } from "@tanstack/react-query";
import { addCandidateSkill, deleteCandidateSkill } from "./CandidateSkillService";



export const useCreateCandidateSkillMutation = () => {
    const mutation = useMutation({
        mutationFn: addCandidateSkill,
        onSuccess: (res) => {
          // Invalidate and refetch
          console.log(res);          
        },
      })
      return mutation;
}

export const useDeleteCandidateSkillMutation = () => {
    const mutation = useMutation({
        mutationFn: deleteCandidateSkill,
        onSuccess: (res) => {
          // Invalidate and refetch
          console.log(res);          
        },
      })
      return mutation;
}
