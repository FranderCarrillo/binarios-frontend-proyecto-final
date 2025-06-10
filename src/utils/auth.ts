import { jwtDecode } from "jwt-decode";

export interface LoggedInUser {
    Id: number;
    email: string;
    role: string;
}

export const getLoggedIn = (): LoggedInUser | null => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
    const decoded = jwtDecode<any>(token);
    return {
        Id: Number(decoded.sub),
        email: decoded.email,
        role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    };
    } catch (error) {
    console.error("Token inválido", error);
    return null;
    }
};