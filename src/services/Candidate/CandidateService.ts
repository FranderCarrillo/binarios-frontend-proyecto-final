import apiAxios from "../../api/apiAxios";
import type { Candidate } from "../../models/Candidate/Candidate";

export async function createCandidate(candidate: Candidate): Promise<Candidate>{
    const response = await apiAxios.post(`/api/Candidates`, candidate);
    return response.data;
}