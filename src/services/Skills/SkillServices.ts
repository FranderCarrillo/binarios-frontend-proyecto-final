import apiAxios from "../../api/apiAxios";
import type { Candidate } from "../../models/Candidate/Candidate";
import type { Skill } from "../../models/Skill/Skill";

export async function getAllSkill_Axios(): Promise<Skill[]>{
   const response = await apiAxios.get(`/Skills`);
   return response.data;
}


