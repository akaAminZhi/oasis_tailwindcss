import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
function Header() {
  return (
    <header className="bg-stone-50 px-4 py-4  border-b border-stone-100 flex items-center justify-end gap-4">
      <UserAvatar></UserAvatar>
      <HeaderMenu></HeaderMenu>
    </header>
  );
}

export default Header;
