import React from "react";
import FAQ from "../FAQ/FAQ";
import Questions from "../FAQ/Questions";
import Logo from "../Logo/Logo";
import Settings from "../Settings/Settings";

type Props = {};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex-[1.25] bg-bgLighter px-3 drop-shadow-sm dark:bg-darkBgLighter md:flex-[1.25] lg:flex-[1.25]">
      {children}
    </div>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-center gap-4 py-4">
      {children}
    </div>
  );
};

const Divider = () => {
  return <hr className="w-[95%] text-divider dark:text-darkDivider" />;
};

function Menu({}: Props) {
  return (
    <Container>
      <Wrapper>
        <FAQ />
        <Questions />
        <Divider />
        <Settings />
      </Wrapper>
    </Container>
  );
}

export default Menu;
