import apiAxios from "../../api/apiAxios";
import type { CandidateOffer } from "../../models/CandidateOffer/CandidateOffer";
import type { Offer } from "../../models/Offer/Offer";

export async function getOffersByCandidate_ById(id: number): Promise<Offer[]>{
   const response = await apiAxios.get(`/CandidateOffers/${id}`);
   return response.data;
}
export async function addCandidateOffer(candidateOffer:  CandidateOffer): Promise<CandidateOffer>{
   const response = await apiAxios.post(`/CandidateOffers`, candidateOffer);
   return response.data;
}

export async function deleteCandidateOffer(candidateOffer:  CandidateOffer) {
   const response = await apiAxios.delete(`/CandidateOffers`, { data: candidateOffer });
   return response.data;
}