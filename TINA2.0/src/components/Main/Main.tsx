import React from "react";
import { useSelector } from "react-redux";
import Input from "../FAQ/Input/Input";
import Introduction from "../Introduction/Introduction";
import Responses from "../Responses/Responses";
import TopMenu from "../TopMenu/TopMenu";

type Props = {};

function Main({}: Props) {
  const conversation = useSelector((state: any) => state.conversation);
  const count = conversation.count;

  return (
    <div className="relative flex h-screen flex-[7] flex-col overflow-hidden bg-redLight text-white dark:bg-darkBgLight">
      <TopMenu />

      {count === 0 ? (
        <Introduction />
      ) : (
        <Responses messages={conversation.messages} />
      )}
      <Input />
    </div>
  );
}

export default Main;
