import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <h1>All cabins</h1>
        <CabinTableOperation></CabinTableOperation>
      </Row>

      <Row>
        <CabinTable></CabinTable>
        <AddCabin></AddCabin>
      </Row>

      {/* <Button onClick={() => setShowForm(!showForm)}>Add new Cabin</Button>
      {showForm && <CreateCabinForm></CreateCabinForm>} */}
    </>
  );
}

export default Cabins;
