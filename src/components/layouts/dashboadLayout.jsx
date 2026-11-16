import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export default function Dashboadlayout() {
  return (
    <div className="flex h-screen bg-slate-200">
      <Sidebar/>

      <div className="flex-1 flex flex-col">
            <Topbar/>

            <main className="flex-1 p-5">
                <Outlet/>
            </main>
      </div>
    </div>
  );
}
