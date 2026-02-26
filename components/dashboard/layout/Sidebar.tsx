"use client";

import Logo from "@/components/shared/Logo";
import AvatarMenu from "../user/AvatarMenu";
import UserNav from "../user/UserNav";

function Sidebar() {
  return (
    <aside className="border-r min-w-[300px] min-h-screen flex-col hidden md:flex">
      <div className="p-6 flex items-start">
        <Logo />
      </div>

      <nav className="flex-1 space-y-2">
        <UserNav />
      </nav>

      <AvatarMenu />
    </aside>
  );
}

export default Sidebar;
