import { format, isToday } from "date-fns";

import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ComfirmDelete from "../../ui/ComfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
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
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();

  return (
    <Table.Row>
      <Modal>
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
        <Menus.Toggle id={bookingId}></Menus.Toggle>
        <Menus.List id={bookingId}>
          <Menus.Button
            icon={<HiEye></HiEye>}
            onClick={() => navigate(`/bookings/${bookingId}`)}
          >
            See detail
          </Menus.Button>
          {status === "unconfirmed" && (
            <Menus.Button
              icon={<HiArrowDownOnSquare></HiArrowDownOnSquare>}
              onClick={() => navigate(`/checkin/${bookingId}`)}
            >
              Check in
            </Menus.Button>
          )}

          {status === "checked-in" && (
            <Menus.Button
              icon={<HiArrowUpOnSquare></HiArrowUpOnSquare>}
              onClick={() => {
                checkout(bookingId);
              }}
              disabled={isCheckingOut}
            >
              Check out
            </Menus.Button>
          )}
          <Modal.Open opens="deleteBooking">
            <Menus.Button icon={<HiTrash></HiTrash>}>Delete</Menus.Button>
          </Modal.Open>
        </Menus.List>
        <Modal.Window name="deleteBooking">
          <ComfirmDelete
            resourceName="booking"
            disabled={isDeletingBooking}
            onConfirm={() => {
              deleteBooking(bookingId);
            }}
          ></ComfirmDelete>
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
