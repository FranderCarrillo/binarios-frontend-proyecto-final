export interface Candidate {
    id?:number,
    name: string,
    surname1: string,
    surname2: string,
    email: string,
    password: string
}

export const CandidateInitialState = {
    id:0,
    name: '',
    surname1: '',
    surname2: '',
    email: '',
    password: ''
}