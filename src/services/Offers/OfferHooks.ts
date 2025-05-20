import { useQuery } from "@tanstack/react-query";
import { getAlllOffer_Axios } from "./OfferServices";


export const useGetAllOffer_ReactQuery = () => {
  const { data: offer, isPending, error } = useQuery({
    queryKey: ['offer'], 
    queryFn: getAlllOffer_Axios, 
  });

  return { offer, isPending, error };
};
