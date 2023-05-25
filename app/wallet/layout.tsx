import getUsers from "@/app/actions/getUsers";
import Sidebar from "@/app/components/sidebar/Sidebar";
import TransactionList from "@/app/wallet/components/TransactionList";


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
        <TransactionList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}