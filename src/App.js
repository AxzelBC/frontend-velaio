import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { routes } from "./routes/index";
import Home from "./views/Home";
import Login from "./views/Login";
import useLogin from "./hooks/useLogin";

function App() {

  const { login } = useLogin();

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return (
    <Routes>
      <Route exact path="/" element={<Navigate replace to={"/home/"} />} />
      <Route exact path="/home/" element={
        login.username ?
          <Home />
          :
          <Navigate replace to="/login/" />
      } />
      <Route exact path="/login/" element={
        login.username ?
          <Navigate replace to="/home/" />
          :
          <Login />
      } />
      {getRoutes(routes['news'])}
      {getRoutes(routes['time'])}
    </Routes>
  );
}

export default App;