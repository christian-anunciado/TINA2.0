import AddQuestion from "./components/Admin/AddQuestion";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import useOnPageReload from "./hooks/useOnPageReload";
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
  useOnPageReload();
  if (window.location.pathname === "/admin/add-question") {
    return <AddQuestion />;
  }
  if (window.location.pathname === "/")
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
