import React from "react";
import {
  MdDarkMode,
  MdOutlineArrowOutward,
  MdOutlineBugReport,
  MdOutlineLightMode,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/themeRedux";

type Props = {};

type Settings = {
  name: string;
  icon: React.ReactElement;
};

const SettingsItem = ({ name, icon }: Settings) => {
  return (
    <div className="flex h-[46px] w-[244px] cursor-pointer items-center gap-3 rounded-lg pl-2 pr-3 text-sm hover:bg-soft dark:hover:bg-darkSoft">
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
      className={`flex h-[46px] w-[244px] min-w-0 cursor-pointer items-center gap-3 rounded-lg pl-2 pr-3 text-sm hover:bg-soft dark:hover:bg-darkSoft dark:hover:text-darkText`}
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
  return (
    <div className="">
      <div className="flex flex-col gap-2 text-sm">
        <ToggleDarkMode />
        <SettingsItem
          name="Report any issues here"
          icon={<MdOutlineBugReport size={"1.2em"} />}
        />
        <SettingsItem
          name="Got any Recommendations?"
          icon={<MdOutlineArrowOutward size={"1.2em"} />}
        />
      </div>
    </div>
  );
}

export default Settings;
