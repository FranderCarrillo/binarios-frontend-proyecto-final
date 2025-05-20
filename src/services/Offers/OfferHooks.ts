import { useQuery } from "@tanstack/react-query";
import { getAlllOffer_Axios } from "./OfferServices";


export const useGetAllOffer_ReactQuery = () => {
  const { data: offers, isPending, error } = useQuery({
    queryKey: ['offers'], 
    queryFn: getAlllOffer_Axios, 
  });

  return { offers, isPending, error };
};
