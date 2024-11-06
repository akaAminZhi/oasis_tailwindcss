import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBooking() {
  const [searchParms] = useSearchParams();

  const numberDays = !searchParms.get("last")
    ? 7
    : Number(searchParms.get("last"));
  const queryDate = subDays(new Date(), numberDays).toISOString();

  const { data: bookings, isPending } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numberDays}`],
  });
  return { bookings, isPending };
}
