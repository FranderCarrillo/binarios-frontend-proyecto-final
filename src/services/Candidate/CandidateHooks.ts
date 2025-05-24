import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCandidate } from "./CandidateService";


export const useCreateCandidateMutation = () => {

    const queryClient = useQueryClient()
    
    const mutation = useMutation({
        mutationFn: createCandidate,
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['candidates'] })
        },
      })

      return mutation;
}