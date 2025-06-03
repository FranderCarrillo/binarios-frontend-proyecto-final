import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCandidateOffer, deleteCandidateOffer, getOffersByCandidate_ById } from "./CandidateOfferService";

export const useCreateCandidateOfferMutation = () => {
    const queryClient = useQueryClient()
    
    const mutation = useMutation({
        mutationFn: addCandidateOffer,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['candidateOffer'] })
        },
        })
        return mutation;
}

export const useGetOffersCandidateById = (id: number) => {
    const { data: offersCandidate, isPending, error } = useQuery(
        {
            queryKey: ['candidateOffer', id],
            queryFn: () => getOffersByCandidate_ById(id)
        }
    );

    return { offersCandidate, isPending, error };
};

export const useDeleteCandidateOfferMutation = () => {
    const mutation = useMutation({
            mutationFn: deleteCandidateOffer,
            onSuccess: (res) => {
                console.log(res);          
            },
        })
        return mutation;
}
