import { useMutation, useQuery } from "@tanstack/react-query";
import { Login } from "./AuthService";
import { getLoggedInCandidate, type LoggedInUser } from "../../utils/auth";

export const useLoginMutation = () => {
    const mutation = useMutation({
        mutationFn: Login,
        onSuccess: (res) => {
          // Invalidate and refetch
          console.log(res.token);
          localStorage.setItem('token', res.token);
          localStorage.setItem('ID', res.candidateId.toString() );
          
        },
        onError: (error: any) => {
          if (error?.response?.status === 401) {
            console.log ('credenciales incorrectas');
          }else{
            console.log ('error descocido');
          }
        },
      });
      return mutation;
}

export const useLogoutMutation = () => {
    const mutation = useMutation({
        mutationFn: async () => {
          localStorage.removeItem('token');
          localStorage.removeItem('ID');
        },
      })
      return mutation;
}

export const useLoggedInCandidate = () => {
  return useQuery<LoggedInUser>({
    queryKey: ['loggedInCandidate'],
    queryFn: async () => {
      const user = getLoggedInCandidate();
      if (!user) throw new Error('No logueado');
      return user;
    },
    staleTime: Infinity,
    retry: false,
  });
};
