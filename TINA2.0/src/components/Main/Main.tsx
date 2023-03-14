import React from "react";
import Input from "../Input/Input";
import Introduction from "../Introduction/Introduction";

type Props = {};

function Main({}: Props) {
  return (
    <div className="relative flex h-full flex-[7] flex-col bg-red text-white dark:bg-darkBgLight">
      <Introduction />
      <Input />
    </div>
  );
}

export default Main;
