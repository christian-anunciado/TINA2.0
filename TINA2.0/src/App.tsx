import { useState } from "react";
import { useSelector } from "react-redux";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

type ChildrenProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ChildrenProps) => {
  return (
    <div className="flex h-screen bg-bgLight text-text dark:bg-darkBgLight dark:text-darkText">
      {children}
    </div>
  );
};

const ThemeHandler = ({ children }: ChildrenProps) => {
  const theme = useSelector((state: any) => state.theme);
  return (
    <div className={`${theme?.darkMode && "dark"} scroll-smooth`}>
      {children}
    </div>
  );
};

function App() {
  return (
    <ThemeHandler>
      <Container>
        <Menu />
        <Main />
      </Container>
    </ThemeHandler>
  );
}

export default App;
