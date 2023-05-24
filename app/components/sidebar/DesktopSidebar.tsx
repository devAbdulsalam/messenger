"use client";

import { User } from "@prisma/client";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";

import Avatar from "@/app/components/Avatar";
import DesktopItem from "@/app/components/sidebar/DesktopItem";
import SettingsModal from "@/app/components/sidebar/SettingsModal";
import TransferModal from "@/app/components/sidebar/TransferModal";
import useRoutes from "@/app/hooks/useRoutes";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  const [isTransfer, setIsTransfer] = useState(false);

  console.log({ currentUser }, "TEST");

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <TransferModal
        currentUser={currentUser}
        isOpen={isTransfer}
        onClose={() => setIsTransfer(false)}
      />
      <div
        className="
        hidden
        lg:fixed
        lg:inset-y-0
        lg:left-0
        lg:z-40
        lg:w-20
        xl:px-6
        lg:overflow-y-auto
        lg:bg-white
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      "
      >
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                // onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsTransfer(true)}
            className="cursor-pointer hover:opacity-75 transition my-2 flex
            gap-x-3
            rounded-md
            p-3
            text-sm
            leading-6
            font-semibold
            text-gray-500
            hover:text-black
            hover:bg-gray-100"
          >
            <FiSettings className="h-6 w-6 shrink-0" aria-hidden="true" />
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
