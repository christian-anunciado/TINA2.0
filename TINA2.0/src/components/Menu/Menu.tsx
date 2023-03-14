import React from "react";
import FAQ from "../FAQ/FAQ";
import Logo from "../Logo/Logo";
import Settings from "../Settings/Settings";

type Props = {};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex-[1] bg-bgLighter px-3 dark:bg-darkBgLighter">
      {children}
    </div>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-4">{children}</div>
  );
};

const Divider = () => {
  return <hr className="w-[95%] text-divider dark:text-darkDivider" />;
};

function Menu({}: Props) {
  return (
    <Container>
      <Wrapper>
        {/* <Logo /> */}
        <FAQ />
        <Divider />
        <Settings />
      </Wrapper>
    </Container>
  );
}

export default Menu;
