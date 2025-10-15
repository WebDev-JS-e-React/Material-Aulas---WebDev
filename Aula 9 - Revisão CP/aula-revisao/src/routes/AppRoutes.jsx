import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import RepoDetail from "../pages/RepoDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "repo/:id", element: <RepoDetail /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;