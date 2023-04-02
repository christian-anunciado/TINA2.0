import React from "react";
import { useSelector } from "react-redux";
import CITLogo from "../../assets/img/CITLogo.png";
type Props = {};

function Loading({}: Props) {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex h-[100svh] flex-col items-center justify-center gap-3 bg-primaryGold dark:bg-darkBgLight lg:gap-4">
        <img
          src={CITLogo}
          className="h-20 w-20 animate-pulse md:h-24 md:w-24 lg:h-28 lg:w-28"
          alt=""
        />
        <span className="animate-pulse text-sm font-medium text-darkSoft dark:text-divider lg:text-base">
          Loading... please wait.
        </span>
      </div>
    </div>
  );
}

export default Loading;
