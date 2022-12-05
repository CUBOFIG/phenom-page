import Home from "../views/Home/Home";
import Layout from "../Layout/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <div>About Me</div>,
      },
      {
        path: "/giveaways",
        element: <div>Giveaways</div>,
      },
      {
        path: "/pc-specs",
        element: <div>PC</div>,
      },
      {
        path: "/surprise",
        element: <div>surprise</div>,
      },
      {
        path: "/in-progress",
        element: <div>IN PROGRESS</div>,
      },
    ],
  },
]);
export default router;
