import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers, HiWallet } from "react-icons/hi2";

import useConversation from "@/app/hooks/useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Wallet",
        href: "/wallet",
        icon: HiWallet,
        active: pathname === "/wallet",
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
