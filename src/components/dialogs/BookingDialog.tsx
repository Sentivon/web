"use client";

import { useEffect } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BookingDialog: React.FC<ButtonProps> = (props) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2" {...props}>
          {props.children}
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-fit overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>Erstgespräch buchen</DialogTitle>
          <DialogDescription>
            Erstgespräch direkt und einfach vereinbaren
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-start mt-8">
          <iframe src="https://api.leadconnectorhq.com/widget/booking/apmRpKBYCujy1GWSEAsg" className="w-full h-[300px] md:h-[500px]" id="apmRpKBYCujy1GWSEAsg_1739530973670"></iframe><br /><script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Schließen
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
