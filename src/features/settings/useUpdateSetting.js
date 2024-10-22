import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateSeeting } = useMutation({
    mutationFn: (newSetting) => updateSettingApi(newSetting),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("setting update success!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdating, updateSeeting };
}

export default useUpdateSetting;
