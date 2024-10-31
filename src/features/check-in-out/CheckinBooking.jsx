import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

// const Box = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);
//   padding: 2.4rem 4rem;
// `;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const { booking, isPending } = useBooking();
  const [comfirmPaid, setComfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  useEffect(() => {
    setComfirmPaid(booking?.isPaid ?? false);
  }, [booking]);

  const { checkin, isCheckingIn } = useCheckin();
  const { settings, isPending: isLoadingSettings } = useSettings();
  if (isPending || isLoadingSettings) return <Spinner></Spinner>;
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numGuests * numNights;
  function handleCheckin() {
    if (!comfirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <header as="h1">Check in booking #{bookingId}</header>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <div className="border rounded-md bg-gray-50 border-gray-200">
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setComfirmPaid(false);
            }}
            disabled={isLoadingSettings}
          >
            Add breakfast for ${optionalBreakfastPrice}
          </Checkbox>
        </div>
      )}

      <div className="border rounded-md bg-gray-50 border-gray-200">
        <Checkbox
          checked={comfirmPaid}
          onChange={() => setComfirmPaid((confirm) => !confirm)}
          id={bookingId}
          disabled={comfirmPaid || isCheckingIn}
        >
          I comfirmed that {guests.fullName} has paid the total amout{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)}+${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </div>
      <div className="flex justify-end gap-2">
        <Button onClick={handleCheckin} disabled={!comfirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </>
  );
}

export default CheckinBooking;
