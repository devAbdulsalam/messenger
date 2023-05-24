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
        <div className="text-center py-2">
          <h2 className="text-lg">Wallet</h2>
          <h3 className="py-2 text-xl text-green-500">Bal: 4000</h3>
        </div>
        <TransactionList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}