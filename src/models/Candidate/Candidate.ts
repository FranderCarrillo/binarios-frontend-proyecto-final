import type { CandidateSkill } from "../CandidateSkill/CandidateSkill"

export interface Candidate {
    id?:number,
    name: string,
    surname1: string,
    surname2: string,
    email: string,
    password: string
    candidateSkills?: CandidateSkill[]
}

export const CandidateInitialState = {
    id:0,
    name: '',
    surname1: '',
    surname2: '',
    email: '',
    password: ''
}