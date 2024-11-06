import { useRecentBooking } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";

function DashboardLayout() {
  const { bookings, isPending } = useRecentBooking();
  const {
    isPending: isPending2,
    comfirmedStays,
    numberDays,
  } = useRecentStays();
  const { cabins, isPending: isPending3 } = useCabins();

  if (isPending || isPending2 || isPending3) return <Spinner></Spinner>;
  // console.log(bookings);
  // console.log(stays);
  // console.log(comfirmedStays);

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-row-[auto_20rem_auto] gap-2">
      <Stats
        bookings={bookings}
        comfirmedStays={comfirmedStays}
        cabinCount={cabins.length}
        numDays={numberDays}
      ></Stats>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Char sale</div>
    </div>
  );
}

export default DashboardLayout;
