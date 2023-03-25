import React, { useEffect } from "react";
import FAQ from "../FAQ/FAQ";
import Questions from "../FAQ/Questions";
import Settings from "../Settings/Settings";

type Props = {
  toggleMenu?: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Divider = () => {
  return <hr className="w-[95%] text-divider dark:text-darkDivider" />;
};

function SliderMenu({ setToggleMenu, toggleMenu }: Props) {
  const [render, setRender] = React.useState(false);

  const delay: number = 300;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (toggleMenu && render) {
      timeout = setTimeout(() => setToggleMenu(false), delay);
    }

    return () => clearTimeout(timeout);
  }, [toggleMenu, render]);

  const setHidden = () => {
    setRender(!render);
  };

  return (
    <div
      className={`relative inset-0 z-50 text-text dark:text-darkText md:hidden`}
      role="dialog"
      aria-modal="true"
      data-headlessui-state="open"
    >
      <div
        className={`fixed inset-0 ${
          render
            ? "animate-[fade-out_300ms_forwards]"
            : "animate-[fade-in_300ms_forwards]"
        } bg-textSoft bg-opacity-75 transition-opacity duration-300`}
      >
        <div
          className={`fixed inset-0 z-50 flex ${
            render
              ? "animate-[slide-right_300ms_forwards]"
              : "animate-[slide-left_300ms_forwards]"
          }`}
        >
          <div className="relative flex w-full max-w-sm flex-1 translate-x-0 flex-col bg-gradient-to-b from-white to-goldLight dark:bg-gradient-to-b dark:from-darkSoft dark:to-darkBgLighter md:max-w-md">
            <div
              className="absolute top-0 right-0 -mr-10 bg-opacity-75 pt-2 opacity-100 md:-mr-12"
              onClick={setHidden}
              id="headlessui-dialog-panel-:r2:"
              data-headlessui-state="open"
            >
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                tabIndex={0}
                onClick={setHidden}
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6 text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
              <div
                className={`flex h-full flex-1 ${
                  render
                    ? "animate-[slide-right_300ms_forwards]"
                    : "animate-[slide-left_300ms_forwards]"
                } flex-col gap-2 space-y-1 p-2`}
              >
                <FAQ />
                <Questions />
                <Divider />
                <Settings />
              </div>
            </div>
          </div>
          <div className="w-14 flex-shrink-0" onClick={setHidden}></div>
        </div>
      </div>
    </div>
  );
}

export default SliderMenu;
