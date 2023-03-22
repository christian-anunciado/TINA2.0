import React from "react";
import FAQ from "../FAQ/FAQ";
import Questions from "../FAQ/Questions";
import Logo from "../Logo/Logo";
import Settings from "../Settings/Settings";

type Props = {};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden h-screen flex-[2] bg-gradient-to-b from-white to-goldLight px-3 drop-shadow-sm dark:bg-gradient-to-b dark:from-darkSoft dark:to-darkBgLighter md:flex-[1.5] lg:block lg:flex-[2] xl:flex-[1.25]">
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
