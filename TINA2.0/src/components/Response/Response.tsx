import React from "react";
import TINA from "../../assets/avatars/tinaAvatarTransparent.png";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

type Props = {
  response: string;
};
// #F8EDE3

function Response({ response }: Props) {
  return (
    <div className="flex w-full items-center justify-center bg-gold drop-shadow-lg dark:bg-darkSoft">
      <div className="group flex w-[45%] items-center gap-6 pt-6 pb-12 text-[15px]">
        <img src={TINA} alt="" className="h-9 w-9 -scale-x-100" />
        <div className="text py-1 text-darkDivider dark:text-[#D1D5DB] ">
          {response}
        </div>
      </div>
    </div>
  );
}

export default Response;
