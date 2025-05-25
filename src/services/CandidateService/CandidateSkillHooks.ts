import { useMutation } from "@tanstack/react-query";
import { addCandidateSkill } from "./CandidateSkillService";



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
