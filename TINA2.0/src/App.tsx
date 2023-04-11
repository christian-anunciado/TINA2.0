import { createBrowserRouter } from "react-router-dom";
import AddQuestion from "./components/Admin/AddQuestion";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import NotFound from "./components/NotFound/NotFound";
import useOnPageReload from "./hooks/useOnPageReload";
import useThemeChange from "./hooks/useThemeChange";
import ModalTest from "./components/Modals/SurveyModal";
import SurveyModal from "./components/Modals/SurveyModal";

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

  return (
    <Container>
      <div className="flex h-full w-full">
        <Menu />
        <Main />
      </div>
      <SurveyModal />
    </Container>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/admin/add-question",
    element: <AddQuestion />,
    errorElement: <NotFound />,
  },
  {
    path: "/modal",
    element: <ModalTest />,
    errorElement: <NotFound />,
  },
]);

export default App;
