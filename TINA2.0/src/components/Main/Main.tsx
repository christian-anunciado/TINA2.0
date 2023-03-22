import React from "react";
import { useSelector } from "react-redux";
import Input from "../FAQ/Input/Input";
import Introduction from "../Introduction/Introduction";
import Responses from "../Responses/Responses";

type Props = {};

function Main({}: Props) {
  const conversation = useSelector((state: any) => state.conversation);
  const count = conversation.count;

  return (
    <div className="relative flex h-full flex-[7] flex-col bg-redLight text-white dark:bg-darkBgLight">
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
