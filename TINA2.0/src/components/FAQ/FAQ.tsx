import React, { Dispatch, SetStateAction } from "react";
import Dropdown from "./Dropdown";
import Questions from "./Questions";

type Props = {};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-5">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <div className="text font-medium uppercase">
      <span className="relative text-darkText before:absolute before:-inset-1 before:block before:-skew-y-1 before:rounded-sm before:bg-red before:p-3">
        <span className="relative">Frequently Asked Questions</span>
      </span>
    </div>
  );
};

function FAQ({}: Props) {
  const [selected, setSelected] = React.useState("General");
  const options = [
    "General",
    "Account",
    "Billing",
    "Payments",
    "Request",
    "Support",
  ];
  return (
    <Wrapper>
      <Header />
      <Dropdown
        options={options}
        selected={selected}
        handler={setSelected}
        disabled={true}
      />
    </Wrapper>
  );
}

export default FAQ;
