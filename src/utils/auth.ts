import { jwtDecode } from "jwt-decode";


export interface LoggedInUser {
    sub: string,
    email: string;
}


export const getLoggedInCandidate = (): LoggedInUser | null => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
    const decoded = jwtDecode<LoggedInUser>(token);
    return decoded;
    } catch (error) {
    console.error("Token inválido", error);
    return null;
    }
};