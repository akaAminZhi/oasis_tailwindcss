import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: createEditCabin, isLoading: isCreating } = useMutation({
    mutationFn: ({ newCabin, id }) => createCabin(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin create success");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isCreating, createEditCabin };
}
