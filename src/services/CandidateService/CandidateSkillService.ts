import apiAxios from "../../api/apiAxios";
import type { Candidate } from "../../models/Candidate/Candidate";
import type { CandidateSkill } from "../../models/CandidateSkill/CandidateSkill";
import type { Skill } from "../../models/Skill/Skill";



export async function  addCandidateSkill(candidateSkill: CandidateSkill): Promise<CandidateSkill>{
    const response = await apiAxios.post(`/CandidateSkills`, candidateSkill);
    return response.data;
}

// services/CandidateSkillService.ts
export async function deleteCandidateSkill(candidateSkill: CandidateSkill) {
    const response = await apiAxios.delete(`/CandidateSkills`, { data: candidateSkill });
    return response.data;
}

export async function getSkillAxiosBy_Candidate(candidate:Candidate): Promise<Skill>{
    const response = await apiAxios.get(`/Skills ${candidate}`);
    return response.data;
}