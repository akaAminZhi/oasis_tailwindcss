import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";

import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import BookingDataBox from "./BookingDataBox";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";

import { useCheckout } from "../check-in-out/useCheckout";
import ComfirmDelete from "../../ui/ComfirmDelete";

function BookingDetail() {
  const { booking, isPending } = useBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();
  if (isPending) return <Spinner></Spinner>;
  const status = booking.status;

  return (
    <>
      <Row type="horizontal">
        <div className="flex  gap-1 items-center">
          <h1>Booking #{booking.id}</h1>
          <Tag type={status}>{status.replace("-", " ")}</Tag>
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <div className="flex gap-1 justify-end">
        {booking.status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${booking.id}`)}>
            Check in
          </Button>
        )}

        {booking.status === "checked-in" && (
          <Button disabled={isCheckingOut} onClick={() => checkout(booking.id)}>
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens="deleteBooking">
            <Button variation="danger">Delete</Button>
          </Modal.Open>

          <Modal.Window name="deleteBooking">
            <ComfirmDelete
              resourceName="booking"
              disabled={isDeletingBooking}
              onConfirm={() => {
                deleteBooking(booking.id, {
                  onSettled: () => navigate(-1),
                });
              }}
            ></ComfirmDelete>
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </>
  );
}

export default BookingDetail;
