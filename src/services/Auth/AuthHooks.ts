import { useMutation } from "@tanstack/react-query";
import { Login } from "./AuthService";

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

// export const useLogoutMutation = () => {

//     const mutation = useMutation({
//         mutationFn: async () => {
//           localStorage.removeItem('token');
//         },
//       })

//       return mutation;
// }