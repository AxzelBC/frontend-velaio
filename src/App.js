import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./routes/index";
import Home from "./views/Home";
import Login from "./views/Login";


function App() {

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <Routes>
      <Route exact path="/login/" element={<Login />} />
      <Route exact path="/home/" element={<Home />} />
      {getRoutes(routes['news'])}
      {getRoutes(routes['time'])}
    </Routes>
  );
}

export default App;