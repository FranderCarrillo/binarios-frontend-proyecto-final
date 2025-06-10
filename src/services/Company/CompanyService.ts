import apiAxios from "../../api/apiAxios";
import type { Company } from "../../models/Company/Company";

export async function getCompanyById(id:number): Promise<Company>{
    const response = await apiAxios.get(`/Companies/${id}`);
    return response.data;
}