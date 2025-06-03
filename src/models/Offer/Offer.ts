import type { Company } from "../Company/Company";
import type { OfferSkill } from "../OfferSkill/OfferSkill";

export interface Offer {
  offerId: number;          
  companyId: number;        
  job: string;             
  description: string;     

  
  company?: Company;                        
  offerSkills?: OfferSkill[];

}