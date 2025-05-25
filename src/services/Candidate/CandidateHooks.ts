import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCandidate, getCandidate_By_Id} from "./CandidateService";



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
  const { data: candidate, isPending, error } = useQuery(
        {
            queryKey: ['candidate', id],
            queryFn: () => getCandidate_By_Id(id)
        });

    return { candidate, isPending, error };
};

// export const useGetProductsByTitle_ReactQuery = (title: string) => {
//     const { data: products, isPending, error } = useQuery(
//         {
//             queryKey: ['products', title],
//             queryFn: () => getProductsByTitle_Axios(title)
//         });

//     return { products, isPending, error };
// }