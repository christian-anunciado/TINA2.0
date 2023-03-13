import React from "react";
import Introduction from "../Introduction/Introduction";

type Props = {};

function Main({}: Props) {
  return (
    <div className="relative h-full flex-[7] bg-red text-white dark:bg-darkBgLight">
      <Introduction />
    </div>
  );
}

export default Main;
