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
const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/courses/", element: <Course /> },
];

// Create the browser router
export const router = createBrowserRouter(routes);


