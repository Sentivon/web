"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import StarRatings from "react-star-ratings";
import TypographyH3 from "../typography/TypographyH3";
import TypographyH4 from "../typography/TypographyH4";
import TypographyMuted from "../typography/TypographyMuted";

export default function Kundenmeinungen() {
  return (
    <div id="kundenmeinungen" className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <FadeMoveUp>
          <TypographyH3>Kundenmeinungen</TypographyH3>
          <ArrowDownRight />
        </FadeMoveUp>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FadeMoveUp>
          <div className="flex flex-col gap-6 p-6 border rounded-lg bg-background">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-24 h-24 bg-gray-800 rounded-full" />
              <TypographyH4>Max Mustermann</TypographyH4>
              <StarRatings
                rating={5}
                starRatedColor="yellow"
                starDimension="30px"
              />
            </div>
            <hr />
            <div className="text-center">
              <TypographyMuted>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea
              </TypographyMuted>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 border rounded-lg bg-background">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-24 h-24 bg-gray-800 rounded-full" />
              <TypographyH4>Max Mustermann</TypographyH4>
              <StarRatings
                rating={5}
                starRatedColor="yellow"
                starDimension="30px"
              />
            </div>
            <hr />
            <div className="text-center">
              <TypographyMuted>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea
              </TypographyMuted>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 border rounded-lg bg-background">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-24 h-24 bg-gray-800 rounded-full" />
              <TypographyH4>Max Mustermann</TypographyH4>
              <StarRatings
                rating={5}
                starRatedColor="yellow"
                starDimension="30px"
              />
            </div>
            <hr />
            <div className="text-center">
              <TypographyMuted>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea
              </TypographyMuted>
            </div>
          </div>
        </FadeMoveUp>
      </div>
    </div>
  );
}
