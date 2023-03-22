import React, { ReactNode, useState } from "react";
import { MdDarkMode, MdMenu, MdOutlineLightMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TINA from "../../assets/avatars/tinaAvatarTransparent.png";
import { toggleDarkMode } from "../../redux/themeRedux";
import SliderMenu from "../SliderMenu.tsx/SliderMenu";

type Props = {};

type HamburgerMenuProps = {
  toggleMenu?: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleDarkMode = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-lg px-2 py-1 hover:bg-darkTextSoft hover:text-darkBgLight dark:hover:bg-darkSoft dark:hover:text-darkText`}
      onClick={() => dispatch(toggleDarkMode())}
    >
      {theme.darkMode ? (
        <MdOutlineLightMode size={"1.3em"} />
      ) : (
        <MdDarkMode size={"1.3em"} />
      )}
    </div>
  );
};

const HamburgerMenu = ({ setToggleMenu, toggleMenu }: HamburgerMenuProps) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-lg px-2 py-0.5 hover:bg-darkTextSoft hover:text-darkBgLight dark:hover:bg-darkSoft dark:hover:text-darkText`}
      onClick={() => setToggleMenu(!toggleMenu)}
    >
      <MdMenu size={"1.5em"} />
    </div>
  );
};

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-0 z-30 h-[45px] w-full flex-none border-b border-b-divider bg-red text-white drop-shadow-md dark:border-b-darkTextSoft dark:bg-darkBgLighter dark:text-white md:hidden">
    {children}
  </div>
);

const TopMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      {toggleMenu && (
        <SliderMenu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      )}
      <Wrapper>
        <div className="flex h-full items-center justify-between px-4">
          <HamburgerMenu
            setToggleMenu={setToggleMenu}
            toggleMenu={toggleMenu}
          />
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-medium uppercase md:text-base">
              TEKNOY INQUIRY ASSISTANT
            </h1>
            <img
              src={TINA}
              alt=""
              className="pointer-events-none h-7 w-7 select-none"
            />
          </div>
          <ToggleDarkMode />
        </div>
      </Wrapper>
    </div>
  );
};

export default TopMenu;
