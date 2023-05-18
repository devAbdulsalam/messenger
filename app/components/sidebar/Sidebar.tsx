import DesktopSidebar from "@/app/components/sidebar/DesktopSidebar";

async function Sidebar({ children }: { children: React.ReactNode }) {
  // const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
