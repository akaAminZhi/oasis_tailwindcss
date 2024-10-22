import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <h1>All cabins</h1>
        <p>Filter / Sort</p>
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
