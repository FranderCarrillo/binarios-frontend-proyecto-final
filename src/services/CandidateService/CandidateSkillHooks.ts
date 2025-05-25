import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCandidateSkill, deleteSkillByCandidate, getSkillAxiosBy_Candidate } from "./CandidateSkillService";
import type { Candidate } from "../../models/Candidate/Candidate";




export const useCreateCandidateMutation = () => {
    const queryClient = useQueryClient()
    
    const mutation = useMutation({
        mutationFn:addCandidateSkill ,
        onSuccess: () => {
          // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['skill'] })
        },
        })

        return mutation;
}

// hooks/useDeleteSkillByCandidate.ts

export const useDeleteSkillByCandidate = (candidateId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (skillId: number) => deleteSkillByCandidate(candidateId, skillId),
    onSuccess: () => {
      // Invalida las habilidades del candidato después de eliminar
        queryClient.invalidateQueries({ queryKey: ['skillsByCandidate', candidateId] });
    },
    });
};
export const usegetSkillAxiosBy_Candidate = (candidate : Candidate) => {
    const { data: skills, isPending, error } = useQuery({
    queryKey: ['skills',candidate.candidateId] , 
    queryFn: getSkillAxiosBy_Candidate(candidate.candidateId), 
    });

    return { skills, isPending, error };
};
