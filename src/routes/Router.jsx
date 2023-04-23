import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {Object.values(routes).map((route, key) => (
          <Route path={route.path} element={route.element} key={key} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
