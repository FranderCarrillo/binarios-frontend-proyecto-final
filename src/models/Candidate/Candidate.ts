export interface Candidate {
    name: string,
    surname1: string,
    surname2: string,
    email: string,
    password: string
}

export const CandidateInitialState = {
    name: '',
    surname1: '',
    surname2: '',
    email: '',
    password: ''
}