import apiAxios from "../../api/apiAxios";
import type { Offer } from "../../models/Offer/Offer";

export async function getAllOffer_Axios(): Promise<Offer[]>{
   const response = await apiAxios.get(`/Offers`);
   return response.data;
}

export async function getffersByCandidate(id: number): Promise<Offer[]>{
   const response = await apiAxios.get(`/Offers/Candidate${id}`);
   return response.data;
}