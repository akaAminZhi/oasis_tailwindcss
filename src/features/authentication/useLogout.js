import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiLogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navitage = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    mutationKey: ["user"],
    onSuccess: () => {
      toast.success("Logout success!");
      navitage("/login");
      queryClient.removeQueries();
      localStorage.clear();
    },
    onError: (error) => {
      console.log("Logout error ", error);
      toast.error("Logout error");
    },
  });
  return { isPending, logout };
}
