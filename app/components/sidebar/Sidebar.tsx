import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "@/app/components/sidebar/DesktopSidebar";
import MobileFooter from "@/app/components/sidebar/MobileFooter";
import MobileHeader from "@/app/components/sidebar/MobileHeader";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <MobileHeader />
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full mt-5">{children}</main>
    </div>
  );
}

export default Sidebar;
