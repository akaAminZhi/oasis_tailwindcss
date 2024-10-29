import { format, isToday } from "date-fns";

import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";
function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const cabinStyle = "text-stone-600 font-semibold font-mono px-2";
  const stackStyle = "flex flex-col gap-1";
  const spanStyle =
    "flex flex-col gap-1 first:font-medium last:text-lg last:text-gray-500";

  return (
    <Table.Row>
      <div className={cabinStyle}>{cabinName}</div>

      <div className={stackStyle}>
        <span className={spanStyle}>{guestName}</span>
        <span className={spanStyle}>{email}</span>
      </div>

      <div className={stackStyle}>
        <span className={spanStyle}>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span className={spanStyle}>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>
      <Tag type={status}>{status.replace("-", " ")}</Tag>

      <div className="text-lg">{formatCurrency(totalPrice)}</div>
    </Table.Row>
  );
}

export default BookingRow;
