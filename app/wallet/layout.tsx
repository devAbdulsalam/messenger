import getUsers from "@/app/actions/getUsers";
import Sidebar from "@/app/components/sidebar/Sidebar";
import UserList from "@/app/users/components/UserList";

export default async function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <p>Wallet</p>
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
