import { HiXMark } from "react-icons/hi2";
import Button from "./Button";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  const styleModal =
    "fixed top-1/2 left-1/2 bg-gray-50 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg px-6 py-4 transition-all duration-500 max-h-[30rem] overflow-scroll";
  const overlay =
    "fixed top-0 left-0 w-full h-[100vh] z-[1000] transition-all duration-500 backdrop-blur-sm";
  return createPortal(
    <div className={overlay}>
      <div className={styleModal}>
        <Button onClick={onClose}>
          <HiXMark></HiXMark>
        </Button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
