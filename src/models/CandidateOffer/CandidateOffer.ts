import type { Candidate } from "../Candidate/Candidate";
import type { Offer } from "../Offer/Offer";

export interface CandidateOffer {
  id?: number;
  candidateId: number;
  candidate?: Candidate; 
  offerId: number;
  offer?: Offer; 
}