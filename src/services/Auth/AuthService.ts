import apiAxios from "../../api/apiAxios";
import type { Auth } from "../../models/Auth/Auth";


export async function Login(Auth: Auth) {
  const response = await apiAxios.post('/Login', Auth);
    return response.data;
}

