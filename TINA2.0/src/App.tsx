import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import useThemeChange from "./hooks/useThemeChange";

type ChildrenProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ChildrenProps) => {
  return (
    <div className="h-full scroll-smooth bg-bgLight text-text dark:bg-darkBgLight dark:text-darkText">
      {children}
    </div>
  );
};

function App() {
  useThemeChange();

  return (
    <Container>
      <div className="flex h-full w-full">
        <Menu />
        <Main />
      </div>
    </Container>
  );
}

export default App;
