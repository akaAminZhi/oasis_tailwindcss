import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { useCreateEditCabin } from "./useCreateEditCabin";
import Modal from "../../ui/Modal";
import ComfirmDelete from "../../ui/ComfirmDelete";
import Table from "../../ui/Table";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Menus from "../../ui/Menus";

function CabinRow({ cabin }) {
  const cabinStyle = "text-stone-600 font-semibold font-mono px-2";
  const priceStyle = "font-semibold font-mono";
  const discountStyle = "text-green-700 font-medium font-mono";
  const imgStyle = `block w-16 aspect-[3/2] object-cover object-center scale-150 translate-x-[7px]`;

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createEditCabin } = useCreateEditCabin();

  function handleDuplicate() {
    createEditCabin({
      newCabin: { ...cabin, name: `copy of ${cabin.name}`, id: undefined },
    });
  }
  return (
    <Table.Row>
      {/* <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-1 items-center  border  px-2 py-3 font-semibold"> */}
      <img className={imgStyle} src={cabin.image} alt={cabin.id}></img>
      <div className={cabinStyle}>{cabin.name}</div>
      <div>{cabin.maxCapacity}</div>
      <div className={priceStyle}>{formatCurrency(cabin.regularPrice)}</div>
      <div className={discountStyle}>{formatCurrency(cabin.discount)}</div>
      <div className="flex gap-1">
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabin.id}></Menus.Toggle>
            <Menus.List id={cabin.id}>
              <Menus.Button
                icon={<HiSquare2Stack></HiSquare2Stack>}
                onClick={() => handleDuplicate()}
              >
                Dublicate
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil></HiPencil>}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash></HiTrash>}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin}></CreateCabinForm>
            </Modal.Window>

            <Modal.Window name="delete">
              <ComfirmDelete
                resourceName="cabin"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabin.id)}
              ></ComfirmDelete>
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
