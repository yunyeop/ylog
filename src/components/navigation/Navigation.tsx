import { Navigations } from "@/constants/navigation";
import React from "react";

type Props = {};

export const Navigation = ({}: Props) => {
  return (
    <nav className="mt-[33px] flex justify-center border-b-[1px] border-[#21262D]">
      <ul className="flex gap-[25px] leading-[30px]">
        {Navigations.map((navigation) => {
          return (
            <li
              key={navigation.name}
              className="flex flex-row items-center gap-[9px] pb-[9px] text-[13px] font-[400] leading-[30px] text-[#C9D1D9]"
            >
              <navigation.icon />
              {navigation.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
