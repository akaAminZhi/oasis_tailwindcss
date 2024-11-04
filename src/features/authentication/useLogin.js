import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiLogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: login, isPending: isLoging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // console.log(user);
      queryClient.setQueryData(["user"], user.user);
      // queryClient.invalidateQueries(["user"]);
      toast.success("Login success!");
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log("Login error ", error);
      toast.error("email or password inccrect!");
    },
  });
  return { login, isLoging };
}
