import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

function Sidebar() {
  return (
    <aside className="flex flex-col gap-2 row-span-full border-r bg-stone-50 border-stone-100 px-4">
      <Logo></Logo>
      <MainNav></MainNav>
      <Uploader></Uploader>
    </aside>
  );
}

export default Sidebar;
