import { FcSurvey } from "react-icons/fc";
import { GiPointing } from "react-icons/gi";

type Props = {};

function SurveyButton({}: Props) {
  return (
    <div className="flex w-fit">
      <a
        href="https://forms.gle/P33f7fUEHuKmdSk97"
        target="_blank"
        rel="noopener"
        className=" flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gold hover:bg-primaryGold dark:bg-darkDivider 
      dark:hover:bg-darkTextSoft"
      >
        <FcSurvey size={"1.4em"} />
      </a>
      <div className="relative top-0 flex h-fit items-center gap-2 text-xs">
        <GiPointing size={"1.5em"} className="ml-2 -scale-x-100 self-start" />
        <span className="md:whitespace-nowrap">Quick survey here!</span>
      </div>
    </div>
  );
}

export default SurveyButton;
