"use client";

import { User } from "@prisma/client";

import TransactionBox from "./TransactionBox";

interface TransactionListProps {
  items: User[];
}

const TransactionList: React.FC<TransactionListProps> = ({ items }) => {
  return (
    <aside
      className="
        fixed
        inset-y-0
        pb-20
        lg:pb-0
        lg:left-20
        lg:w-80
        lg:block
        overflow-y-auto
        border-r
        border-gray-200
        block w-full left-0
      "
    >
      <div className="px-5">
        <div className="flex-col">
          <div className="text-center py-2">
            <h2 className="text-lg">Wallet</h2>
            <h3 className="py-2 text-xl text-green-500">Bal: 4000</h3>
          </div>
          <div
            className="
              text-2xl
              font-bold
              text-neutral-800
              py-4
            "
          >
            Transactions
          </div>
        </div>
        {items.map((item) => (
          <TransactionBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default TransactionList;
