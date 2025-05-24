import { useMutation, useQuery } from "@tanstack/react-query";
import { Login } from "./AuthService";
import { getLoggedInCandidate, type LoggedInUser } from "../../utils/auth";


export const useLoginMutation = () => {
    const mutation = useMutation({
        mutationFn: Login,
        onSuccess: (res) => {
          // Invalidate and refetch
          localStorage.setItem('token', res);
          console.log(res);
        },
      })
      return mutation;
}

export const useLogoutMutation = () => {

    const mutation = useMutation({
        mutationFn: async () => {
          localStorage.removeItem('token');
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
