import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={() => logout()}>
      {!isLoading ? (
        <HiArrowRightOnRectangle className="stroke-blue-600 w-5 h-5 stroke-1"></HiArrowRightOnRectangle>
      ) : (
        <Spinner />
      )}
    </ButtonIcon>
  );
}

export default Logout;
