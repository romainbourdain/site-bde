import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return (
    <Routes>
      {Object.values(routes).map((route, key) => (
        <Route path={route.path} element={route.element} key={key} />
      ))}
    </Routes>
  );
};

export default Router;
