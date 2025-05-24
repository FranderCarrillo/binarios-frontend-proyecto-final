import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCandidate, GetCandidate_By_Id } from "./CandidateService";


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

export const useGetCandidateById = (id: number) => {
  const { data: candidate, isPending, error } = useQuery({
    queryKey: ['candidate', id], // clave única por ID
    queryFn: ({ queryKey }) => GetCandidate_By_Id(Number(queryKey[1])), // extrae el ID del queryKey
  });

  return { candidate, isPending, error };
};