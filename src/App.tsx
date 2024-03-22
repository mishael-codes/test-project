import "./App.css";
import NotFound from "./pages/notFound";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "*", element: <NotFound /> },
]);

export default App;
