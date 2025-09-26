import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import Relatorios from "../pages/Relatorios";
import Configuracoes from "../pages/Configuracoes";
import PageNotFound from "../pages/PageNotFound";
import PostUsuario from "../pages/PostsUsuarios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <PageNotFound />, 
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "usuarios",
        element: <Usuarios />,
      },
      {
        path: "usuario/:id/posts",
        element: <PostUsuario/>
      },
      {
        path: "relatorios",
        element: <Relatorios />,
      },
      {
        path: "configuracoes",
        element: <Configuracoes />,
      },
    ],
  },
]);