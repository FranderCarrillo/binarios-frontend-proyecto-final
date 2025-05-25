import type { Candidate } from "../Candidate/Candidate";

export interface AuthResponse {
  token: string;
  candidateId: number;
}
