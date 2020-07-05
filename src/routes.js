import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NotFound from "./pages/NotFound/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/du-an",
    main: () => <ProjectPage />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
