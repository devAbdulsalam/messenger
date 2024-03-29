"use client";

import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

import MobileDrawer from "@/app/components/sidebar/MobileDrawer";
import useConversation from "@/app/hooks/useConversation";

// import useRoutes from "@/app/hooks/useRoutes";

const MobileHeader = () => {
  //   const routes = useRoutes();
  const { isOpen } = useConversation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (isOpen) {
    return null;
  }

  return (
    <>
      <MobileDrawer
        // data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div
        className="
        sticky
        justify-between
        w-full
        top-0
        z-40
        flex
        py-2
        items-center
        bg-white
        border-b-[1px]
        lg:hidden
      "
      >
        <h1 className="text-xl font-semibold py-1">Msger</h1>
        <button onClick={() => setDrawerOpen(true)} className="p-px">
          <HiDotsVertical
            className="h-6 w-6 shrink-0  text-sky-500
          cursor-pointer
          hover:text-sky-600
          transition"
            aria-hidden="true"
          />
        </button>
      </div>
    </>
  );
};

export default MobileHeader;
