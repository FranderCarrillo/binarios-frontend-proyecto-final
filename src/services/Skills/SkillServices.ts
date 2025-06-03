import apiAxios from "../../api/apiAxios";
import type { Skill } from "../../models/Skill/Skill";

export async function getAllSkills(): Promise<Skill[]>{
   const response = await apiAxios.get(`/Skills`);
   return response.data;
}


