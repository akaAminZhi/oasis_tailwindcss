import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { useCreateEditCabin } from "./useCreateEditCabin";
import Modal from "../../ui/Modal";
import ComfirmDelete from "../../ui/ComfirmDelete";
import Table from "../../ui/Table";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

function CabinRow({ cabin }) {
  const cabinStyle = "text-stone-600 font-semibold font-mono px-2";
  const priceStyle = "font-semibold font-mono";
  const discountStyle = "text-green-700 font-medium font-mono";
  const imgStyle = `block w-16 aspect-[3/2] object-cover object-center scale-150 -translate-x-[7px]`;

  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createEditCabin } = useCreateEditCabin();

  function handleDuplicate() {
    createEditCabin({
      newCabin: { ...cabin, name: `copy of ${cabin.name}`, id: undefined },
    });
  }
  return (
    <>
      <Table.Row>
        {/* <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-1 items-center  border  px-2 py-3 font-semibold"> */}
        <img className={imgStyle} src={cabin.image} alt={cabin.id}></img>
        <div className={cabinStyle}>{cabin.name}</div>
        <div>{cabin.maxCapacity}</div>
        <div className={priceStyle}>{formatCurrency(cabin.regularPrice)}</div>
        <div className={discountStyle}>{formatCurrency(cabin.discount)}</div>
        <div className="flex gap-1">
          <button
            className="border"
            disabled={isCreating}
            onClick={() => handleDuplicate()}
          >
            <HiSquare2Stack></HiSquare2Stack>
          </button>
          <Modal>
            <Modal.Open opens="edit">
              <button className="border">
                <HiPencil></HiPencil>
              </button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin}></CreateCabinForm>
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.Open opens="delete">
              <button className="border">
                <HiTrash></HiTrash>
              </button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ComfirmDelete
                resourceName="cabin"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabin.id)}
              ></ComfirmDelete>
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
