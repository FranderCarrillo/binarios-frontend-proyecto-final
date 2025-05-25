import apiAxios from "../../api/apiAxios";
import type { Candidate } from "../../models/Candidate/Candidate";
import type { Skill } from "../../models/Skill/Skill";

export async function createCandidate(candidate: Candidate): Promise<Candidate>{
    const response = await apiAxios.post(`/Candidates`, candidate);
    return response.data;
}
export async function getCandidate_By_Id(id:number): Promise<Candidate>{
    const response = await apiAxios.get(`/Candidates/${id}`);
    return response.data;
}

