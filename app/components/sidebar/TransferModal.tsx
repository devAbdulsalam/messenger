"use client";

import { User } from "@prisma/client";
// import axios from "axios";
import { signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";

interface TransferModalProps {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
}

const TransferModal: React.FC<TransferModalProps> = ({
  isOpen,
  onClose,
  currentUser = {},
}) => {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);

  console.log(currentUser, "&TEST_CURRENT_USER");

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   watch,
  //   formState: { errors },
  // } = useForm<FieldValues>({
  //   defaultValues: {
  //     name: currentUser?.name,
  //     image: currentUser?.image,
  //   },
  // });

  // const image = watch("image");

  // const handleUpload = (result: any) => {
  //   setValue("image", result.info.secure_url, {
  //     shouldValidate: true,
  //   });
  // };

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   setIsLoading(true);

  //   axios
  //     .post("/api/settings", data)
  //     .then(() => {
  //       router.refresh();
  //       onClose();
  //     })
  //     .catch(() => toast.error("Something went wrong!"))
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2
              className="
                text-base
                font-semibold
                leading-7
                text-gray-900
              "
            >
              Settings
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit your Wallet information.
            </p>
          </div>
        </div>

        <div
          className="
            mt-6
            flex
            items-center
            justify-end
            gap-x-6
          "
        >
          <Button secondary onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => signOut()} type="submit">
            <HiArrowLeftOnRectangle size={20} />
            <span className="ml-1">Log out</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TransferModal;
