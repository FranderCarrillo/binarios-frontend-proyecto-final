import type { Company } from "../Company/Company";

export interface Offer {
  offerId: number;          // ID interno de la oferta
  companyId: number;        // Clave foránea a Company
  job: string;              // Título del puesto
  description: string;      // Descripción del trabajo

  // Relaciones (opcionalmente presentes)
  company?: Company;                        
  offerSkills?: OfferSkill[];
//   candidateOffers?: CandidateOffer[];
}