import { useQuery } from "@tanstack/react-query";
import { getAllOffer_Axios, getffersByCandidate } from "./OfferServices";

export const useGetAllOffer_ReactQuery = () => {
  const { data: offers, isPending, error } = useQuery({
    queryKey: ['offers'], 
    queryFn: getAllOffer_Axios, 
  });

  return { offers, isPending, error };
};

export const useGetCandidateById = (id: number) => {
  const { data: offers, isPending, error } = useQuery(
        {
            queryKey: ['offers', id],
            queryFn: () => getffersByCandidate(id)
        });

    return { offers, isPending, error };
};