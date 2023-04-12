import React from "react";
import { useSelector } from "react-redux";
import Input from "../Input/Input";
import Introduction from "../Introduction/Introduction";
import Responses from "../Responses/Responses";
import TopMenu from "../TopMenu/TopMenu";
import CITLOGO from "../../assets/img/CITLogo.png";

type Props = {};

function Main({}: Props) {
  const conversation = useSelector((state: any) => state.conversation);
  const count = conversation.count;
  const logoLink = "../../assets/img/CITLogo.png";

  return (
    <div
      className={`relative flex h-[100svh] w-full flex-[7] flex-col overflow-hidden bg-cit-pattern bg-contain bg-center bg-no-repeat text-white`}
    >
      <div className="flex h-full flex-col bg-gold bg-opacity-90 backdrop-blur-sm dark:bg-darkBgLight dark:bg-opacity-95">
        <TopMenu />

        {count === 0 ? (
          <Introduction />
        ) : (
          <Responses messages={conversation.messages} />
        )}
        <Input />
      </div>
    </div>
  );
}

export default Main;
