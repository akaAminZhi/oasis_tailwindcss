import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  //   filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // sort
  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [filed, directon] = sortByRow.split("-");
  const sortBy = { filed, directon };

  // pagenation

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    isPending,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  return { isPending, bookings, error, count };
}
