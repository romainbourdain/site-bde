import React from "react";
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import Tdb from "../pages/Tdb";
import erreurText from "../assets/text/erreur";

const Router = () => {
    return (
        <Routes>
            {Object.values(routes).map((route, key) => (
                <Route path={route.path} element={route.element} key={key}/>
            ))}
            <Route path={erreurText.tdb} element={<Tdb/>}/>
        </Routes>
    );
};

export default Router;
