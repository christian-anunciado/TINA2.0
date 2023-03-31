import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

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
