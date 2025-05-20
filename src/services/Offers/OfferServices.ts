import apiAxios from "../../api/apiAxios";
import type { Offer } from "../../models/Offer/Offer";

export async function getProductsByTitle_Axios(): Promise<Offer[]>{
   const response = await apiAxios.get(`/Offers`);
   return response.data;
}