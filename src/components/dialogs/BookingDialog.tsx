"use client";

import { ArrowUpRight, Copy } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
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
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2" {...props}>
          Jetzt Zusammenarbeit anfragen <ArrowUpRight size={16} />
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
          <Cal
            calLink="sefrinconsulting/kennenlernen"
            className="md:w-[770px] w-full"
            style={{ height: "100%", overflow: "scroll" }}
            config={{ layout: "column_view" }}
          />
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
