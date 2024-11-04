import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiLogin";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      //   console.log(data);
      toast.success("Your account is successful created.");
    },
    onError: (err) => {
      console.log(err);
      //   toast.error(err);
    },
  });
  return { signUp, isPending };
}
