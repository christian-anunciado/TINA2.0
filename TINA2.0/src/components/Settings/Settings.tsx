import React from "react";
import {
  MdDarkMode,
  MdOutlineArrowOutward,
  MdOutlineBugReport,
  MdOutlineClearAll,
  MdOutlineLightMode,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearMessages } from "../../redux/convoRedux";
import { toggleDarkMode } from "../../redux/themeRedux";
import { BiTrash } from "react-icons/bi";

type Props = {};

type Settings = {
  name: string;
  icon: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
};

const SettingsItem = ({ name, icon, onClick, disabled }: Settings) => {
  return (
    <div
      className={`flex h-[46px] w-full cursor-pointer items-center gap-3 rounded-lg pl-2 pr-3 text-sm hover:bg-soft dark:hover:bg-darkSoft md:text-[13px] ${
        disabled && "pointer-events-none opacity-50"
      }`}
      onClick={() => onClick?.()}
    >
      <div>{icon}</div>
      {name}
    </div>
  );
};

const ToggleDarkMode = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex h-[46px] w-full cursor-pointer items-center gap-3 rounded-lg pl-2 pr-3 text-sm hover:bg-soft dark:hover:bg-darkSoft dark:hover:text-darkText md:text-[13px]`}
      onClick={() => dispatch(toggleDarkMode())}
    >
      {theme.darkMode ? (
        <MdOutlineLightMode size={"1.2em"} />
      ) : (
        <MdDarkMode size={"1.2em"} />
      )}
      {theme.darkMode ? "Light Mode" : "Dark Mode"}
    </div>
  );
};

function Settings({}: Props) {
  const dispatch = useDispatch();
  return (
    <div className="min-h-0 w-full flex-1 md:overflow-hidden md:hover:overflow-y-auto lg:flex-[2]">
      <div className="flex flex-col gap-2 text-sm md:mr-1">
        <ToggleDarkMode />

        <SettingsItem
          name="Report any issues here"
          icon={<MdOutlineBugReport size={"1.2em"} />}
          disabled={true}
        />
        <SettingsItem
          name="Got any Recommendations?"
          icon={<MdOutlineArrowOutward size={"1.2em"} />}
          disabled={true}
        />
        <SettingsItem
          name="Clear Chat"
          icon={<BiTrash size={"1.2em"} />}
          onClick={() => dispatch(clearMessages())}
        />
      </div>
    </div>
  );
}

export default Settings;
