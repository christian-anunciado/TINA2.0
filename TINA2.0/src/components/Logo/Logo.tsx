import React from "react";
import TINA from "../../assets/avatars/tinaAvatar.png";

type Props = {};

function Logo({}: Props) {
  return (
    <div className="mb-6 flex items-center gap-0.5">
      <div className="text-base font-medium">
        Teknoy INquiry Assistant (TINA)
      </div>
      <img className="ml-2 h-9 w-9" src={TINA} alt="" />
    </div>
  );
}

export default Logo;
