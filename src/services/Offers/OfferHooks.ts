import { useQuery } from "@tanstack/react-query";
import { getAllOffer_Axios } from "./OfferServices";


export const useGetAllOffer_ReactQuery = () => {
  const { data: offers, isPending, error } = useQuery({
    queryKey: ['offers'], 
    queryFn: getAllOffer_Axios, 
  });

  return { offers, isPending, error };
};
