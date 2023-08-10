import React from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import {  
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes, 
  BrowserRouter
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'; // Create this component
import Course from './pages/Course/Course'; // Create this component


const Root = () => {
  return (
    <Routes>
        <Route  default path="/login" component={Login} />
        <Route  path="/home" component={Home} />
        <Route  path="/course" component={Course} />
        {/* Add more routes here */}
    </Routes>
  );
};

const Popup = () => {
  return (
    <BrowserRouter>
        <Root />
    </BrowserRouter>
  );
};

export default Popup;
