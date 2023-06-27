 import logo from './logo.svg';
import './App.css';
 import {BrowserRouter} from "react-router-dom";
 import React from "react";
 import UserDetails from "./page/UserDetail";
 import Users from "./page/User";
 import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path={"/user/add"} element={<UserDetails />} />
          <Route path={`/user/:userId`} element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
