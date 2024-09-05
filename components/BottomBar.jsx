"use client"
// Component usage:
// 1) Whenever scrren dimensions are reduced
// 2) End user switches to Mobile modes
import { Logout } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="bottom-bar">
      <Link
        href="/chats"
        className={`${
          pathname === "/chats" ? "text-red-400" : ""
        } text-heading4-bold`}
      >
        Chats
      </Link>
      <Link
        href="/contacts"
        className={`${
          pathname === "/contacts" ? "text-red-400" : ""
        } text-heading4-bold`}
      >
        Contacts
      </Link>

      <Logout
        sx={{ color: "#13E0E0", cursor: "pointer" }}
        onClick={handleLogout}
      />

      <Link href="/profile">
        <img
          src={user?.profileImage || "/assets/person.jpg"}
          alt="profile"
          className="profilePhoto"
        />
      </Link>
    </div>
  );
};

export default BottomBar;
