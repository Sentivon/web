"use client";

import TypographyH1 from "../typography/TypographyH1";
import TypographyH2 from "../typography/TypographyH2";
import TypographyLead from "../typography/TypographyLead";
import FadeMoveUp from "@/lib/FadeMoveUp";
import { Button } from "../ui/button";

export default function Portfolio() {
    return (
        <div id="Portfolio">
            <div className="text-center mb-24">
                <TypographyH1>Unsere Projekte!</TypographyH1>
            </div>
            <div className="grid grid-cols-3 gap-16">
                <div className="flex flex-col gap-8">
                    <div className="bg-gray-600 rounded-lg w-full h-52" />
                    <div className="text-center flex flex-col gap-2">
                        <TypographyH2>Testprojekt 1</TypographyH2>
                        <TypographyLead>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum
                        </TypographyLead>
                    </div>
                    <div className="flex justify-center">
                        <Button size={"lg"}>Mehr lesen</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="bg-gray-600 rounded-lg w-full h-52" />
                    <div className="text-center flex flex-col gap-2">
                        <TypographyH2>Testprojekt 2</TypographyH2>
                        <TypographyLead>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum
                        </TypographyLead>
                    </div>
                    <div className="flex justify-center">
                        <Button size={"lg"}>Mehr lesen</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="bg-gray-600 rounded-lg w-full h-52" />
                    <div className="text-center flex flex-col gap-2">
                        <TypographyH2>Testprojekt 3</TypographyH2>
                        <TypographyLead>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum
                        </TypographyLead>
                    </div>
                    <div className="flex justify-center">
                        <Button size={"lg"}>Mehr lesen</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
