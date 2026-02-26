import { getMessagesByBrandId } from "@/lib/api/messages";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { useGetMessages } from "@/lib/hooks/useGetMessages";
import { logout } from "@/lib/hooks/useLogOut";
import { ChevronLeft, LogOut } from "lucide-react";
import Link from "next/link";

function AvatarMenu() {
  const { user, loading } = useCurrentUser();

  return (
    <div className="bg-white/10 p-6 border-t flex gap-3 items-center">
      <div className="bg-black/50 p-5 w-fit rounded-full" />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start gap-1">
          <span className="text-sm">{user?.email.split("@")[0]}</span>
          <Link
            href="/"
            className="text-xs flex items-center gap-1 text-secondary hover:text-primary"
          >
            <ChevronLeft className="size-5" />
            Regresar
          </Link>
        </div>

        <button className="text-sm flex items-center gap-2" onClick={logout}>
          <LogOut />
        </button>
      </div>
    </div>
  );
}

export default AvatarMenu;
