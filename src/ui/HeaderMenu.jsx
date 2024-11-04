import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-2">
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser className="stroke-blue-600 w-5 h-5 stroke-2"></HiOutlineUser>
        </ButtonIcon>
      </li>
      <li>
        <Logout></Logout>
      </li>
    </ul>
  );
}

export default HeaderMenu;
