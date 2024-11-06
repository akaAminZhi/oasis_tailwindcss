import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParms] = useSearchParams();

  const numberDays = !searchParms.get("last")
    ? 7
    : Number(searchParms.get("last"));
  const queryDate = subDays(new Date(), numberDays).toISOString();

  const { data: stays, isPending } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numberDays}`],
  });
  const comfirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, isPending, comfirmedStays, numberDays };
}
