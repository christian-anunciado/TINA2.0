import React, { Dispatch, SetStateAction } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useClickOutside } from "../../hooks/useOutsideClick";

type Props = {
  options: string[];
  handler: Dispatch<SetStateAction<string>>;
  selected: string;
  disabled?: boolean;
};

type OptionProps = {
  option: string;
  handler?: (option: string) => void;
};

type DropdownProps = {
  options: string[];
  handler?: (option: string) => void;
  selected: string;
};

function Dropdown({ options, handler, selected, disabled }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLButtonElement>(null);
  const dropDownRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, dropDownRef, () => setIsOpen(false));

  const handleSelect = (option: string) => {
    handler(option);
    setIsOpen(false);
  };
  return (
    <div
      className={`relative flex flex-col ${
        disabled && "pointer-events-none opacity-50"
      }`}
    >
      <button
        className="flex h-[46px] w-[244px] items-center justify-between rounded-xl border border-darkTextSoft px-4 text-sm font-medium dark:hover:bg-darkSoft"
        onClick={() => setIsOpen(!isOpen)}
        ref={containerRef}
      >
        {selected}
        <MdKeyboardArrowDown />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-10" ref={dropDownRef}>
          {
            <Options
              options={options}
              selected={selected}
              handler={handleSelect}
            />
          }
        </div>
      )}
    </div>
  );
}

const Option = (props: OptionProps) => {
  return (
    <div
      className="flex h-[46px] w-[244px] cursor-pointer items-center px-4 hover:bg-darkSoft dark:hover:bg-darkTextSoft"
      onClick={() => props.handler?.(props.option)}
    >
      {props.option}
    </div>
  );
};

const Options = (props: DropdownProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-darkBgLighter py-2 text-darkText dark:bg-white dark:text-text">
      {props.options.map((option) => {
        if (option === props.selected) return;
        return <Option option={option} handler={props.handler} key={option} />;
      })}
    </div>
  );
};

export default Dropdown;
