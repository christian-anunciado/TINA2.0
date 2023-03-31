import React from "react";
import { useSelector } from "react-redux";
import CITLogo from "../../assets/img/CITLogo.png";
type Props = {};

function Loading({}: Props) {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex h-[100svh] items-center justify-center bg-gold dark:bg-darkBgLight">
        <img
          src={CITLogo}
          className="h-20 w-20 animate-pulse md:h-24 md:w-24 lg:h-28 lg:w-28"
          alt=""
        />
      </div>
    </div>
  );
}

export default Loading;
