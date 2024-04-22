"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { useHearstModal } from "@/store/useHeartsModal";

const HeartsModal = () => {
  const router = useRouter();
  const [isclient, setIsClient] = useState(false);
  const { isOpen, close } = useHearstModal();

  const onClick = () => {
    close();
    router.push("/store");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isclient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className=" max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src={"/mascot_bad.svg"}
              height={80}
              width={80}
              alt="Mascot"
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            You ran out of hearts!
          </DialogTitle>
          <DialogDescription className=" text-center text-base">
            Get Pro for unlimited hearts, or purchase them in the store.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant={"primaryOutline"}
              className="w-full"
              size={"lg"}
              onClick={onClick}
            >
              Get unlimited hearts
            </Button>
            <Button
              variant={"dangerOutline"}
              className="w-full"
              size={"lg"}
              onClick={close}
            >
              Dismiss
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HeartsModal;
