import type { Offer } from "../Offer/Offer";

export interface Company {
  companyId: number;      
  name: string;           
  webSite: string;        
  email: string;           

 
  offers?: Offer[];
}