import { useMutation } from "@tanstack/react-query";
import { Login } from "./AuthService";
import { useNavigate } from "@tanstack/react-router";

export const useLoginMutation = () => {
    const navigate = useNavigate();
    
    const mutation = useMutation({
        mutationFn: Login,
        onSuccess: (res) => {
          localStorage.setItem('token', res);
          //localStorage.setItem('ID', res.candidateId.toString() );
          navigate({ to: '/user/dashboard' });
        }
      });
      return mutation;
}

export const useLogoutMutation = () => {
    const mutation = useMutation({
        mutationFn: async () => {
          localStorage.removeItem('token');
          localStorage.removeItem('ID');
        }
      })
      return mutation;
}