import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header></Header>
      <Sidebar></Sidebar>
      <main className="px-3 py-4 bg-stone-100 overflow-y-auto overflow-x-auto">
        <div className="mx-auto max-w-[120rem] flex flex-col gap-5">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
