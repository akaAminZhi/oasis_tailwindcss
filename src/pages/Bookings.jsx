import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Row from "../ui/Row";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <h1>All bookings</h1>
        <BookingTableOperations></BookingTableOperations>
      </Row>

      <Row>
        <BookingTable></BookingTable>
      </Row>
    </>
  );
}

export default Bookings;
