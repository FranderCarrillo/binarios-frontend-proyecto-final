import apiAxios from "../../api/apiAxios";
import type { Auth } from "../../models/Auth/Auth";
import type { AuthResponse } from "../../models/Auth/AuthResponse";


export async function Login(Auth: Auth): Promise<AuthResponse> {
  const response = await apiAxios.post('/Login', Auth);
  return response.data;
}

