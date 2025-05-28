import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCandidateOffer, getOffersByCandidate_ById } from "./CandidateOfferService";

export const useCreateCandidateOfferMutation = () => {
    const queryClient = useQueryClient()
    
    const mutation = useMutation({
        mutationFn: addCandidateOffer,
        onSuccess: () => {
          // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['candidateOffer'] })
        },
        })

        return mutation;
}
export const useGetOffersCandidateById = (id: number) => {
    const { data: offersCandidate, isPending, error } = useQuery(
        {
            queryKey: ['candidateOffer', id],
            queryFn: () =>getOffersByCandidate_ById(id)
        });

    return { offersCandidate, isPending, error };
};
