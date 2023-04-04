import React, { Dispatch, SetStateAction } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useClickOutside } from "../../hooks/useOutsideClick";
import { QuestionType } from "../../context/questionsContext";

type Props = {
  options: string[];
  handler: Dispatch<SetStateAction<QuestionType>>;
  selected: string;
  disabled?: boolean;
};

type OptionProps = {
  option: QuestionType;
  handler?: (option: QuestionType) => void;
  disabled?: boolean;
};

type DropdownProps = {
  options: string[];
  handler?: (option: QuestionType) => void;
  selected: string;
};

const Option = (props: OptionProps) => {
  return (
    <div
      className={`${
        props.disabled && "pointer-events-none opacity-50"
      } flex h-[46px] w-[97%] cursor-pointer items-center rounded-xl px-4 text-sm hover:bg-darkDivider dark:hover:bg-darkTextSoft`}
      onClick={() => props.handler?.(props.option)}
    >
      {props.option}
    </div>
  );
};

const Options = (props: DropdownProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg bg-darkBgLighter py-2 text-darkText dark:bg-white dark:text-text">
      {props.options.map((option) => {
        return (
          <Option
            option={option as QuestionType}
            handler={props.handler}
            key={option}
            disabled={option === props.selected ? true : false}
          />
        );
      })}
    </div>
  );
};

function Dropdown({ options, handler, selected, disabled }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLButtonElement>(null);
  const dropDownRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, dropDownRef, () => setIsOpen(false));

  const handleSelect = (option: QuestionType) => {
    handler(option);
    setIsOpen(false);
  };
  return (
    <div
      className={`relative flex w-[95%] flex-col ${
        disabled && "pointer-events-none opacity-50"
      }`}
    >
      <button
        className="flex h-[46px] items-center justify-between rounded-xl border border-darkTextSoft px-4 text-sm font-medium hover:bg-divider dark:hover:bg-darkDivider"
        onClick={() => setIsOpen(!isOpen)}
        ref={containerRef}
      >
        {selected}
        <MdKeyboardArrowDown />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 w-full" ref={dropDownRef}>
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

export default Dropdown;
