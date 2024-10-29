import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import useClickOutside from "../hooks/useClickOutside";

const menusContext = createContext();
function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;
  const [position, setPosition] = useState(null);

  return (
    <menusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </menusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className="flex justify-end items-center">{children}</div>;
}
function Toggle({ id }) {
  const { open, close, openId, setPosition } = useContext(menusContext);

  function hanldeClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    if (id !== openId || id === "") {
      open(id);
    } else {
      close();
    }
  }
  return (
    <button
      onClick={hanldeClick}
      className="border-0 py-1 rounded-sm translate-x-3 duration-200 hover:bg-gray-300 stroke-gray-700 stroke-2"
    >
      <HiEllipsisVertical></HiEllipsisVertical>
    </button>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(menusContext);
  const ref = useClickOutside(close);
  if (id !== openId) {
    return null;
  }

  const right = `${position.x}px`;
  const top = `${position.y}px`;

  return createPortal(
    <ul
      ref={ref}
      style={{ right: right, top: top }}
      className={`fixed bg-gray-50 shadow-sm rounded-md `}
    >
      {children}
    </ul>,
    document.body
  );
}
function Button({ icon, children, onClick }) {
  const { close } = useContext(menusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <button
        onClick={handleClick}
        className="w-full text-left border-0 py-2 px-2 flex items-center gap-3 rounded-sm translate-x-1 duration-200 hover:bg-gray-100 stroke-gray-400 stroke-2"
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
export default Menus;
