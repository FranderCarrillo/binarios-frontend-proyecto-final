import { useMutation } from "@tanstack/react-query";
import { addCandidateSkill, deleteCandidateSkill } from "./CandidateSkillService";


export const useCreateCandidateSkillMutation = () => {
    const mutation = useMutation({
        mutationFn: addCandidateSkill,
        onSuccess: (res) => {
          
          console.log(res);          
        },
      })
      return mutation;
}

export const useDeleteCandidateSkillMutation = () => {
    const mutation = useMutation({
        mutationFn: deleteCandidateSkill,
        onSuccess: (res) => {
          
          console.log(res);          
        },
      })
      return mutation;
}
