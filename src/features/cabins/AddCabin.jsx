import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add-cabin">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="add-cabin">
          <CreateCabinForm></CreateCabinForm>
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add new Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm
//             closeModal={() => setIsOpenModal(false)}
//           ></CreateCabinForm>
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
