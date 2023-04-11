import React from "react";
import { FcSurvey } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

type Props = {};

function SurveyButton({}: Props) {
  const navigate = useNavigate();

  return (
    <a
      href="https://forms.gle/P33f7fUEHuKmdSk97"
      target="_blank"
      rel="noopener"
      className=" flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gold hover:bg-primaryGold dark:bg-darkDivider 
      dark:hover:bg-darkTextSoft"
    >
      <FcSurvey size={"1.4em"} />
    </a>
  );
}

export default SurveyButton;
