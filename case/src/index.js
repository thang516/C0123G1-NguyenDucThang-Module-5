import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {CreateCustomer} from "./components/customer/CreateCustomer";
import {Customer} from "./components/customer/Customer";
import Home from "./components/Home";
import {UpdateCustomer} from "./components/customer/UpdateCustomer";
import {Contract} from "./components/contract/Contract";
import {CreateContract} from "./components/contract/CreateContract";
import {CreateService} from "./components/services/CreateService";
import {UpdateService} from "./components/services/UpdateService";
import {CreateHouse} from "./components/services/CreateHouse";
import {CreateRoom} from "./components/services/CreateRoom";
import {UpdateHouse} from "./components/services/UpdateHouse";
import {UpdateRoom} from "./components/services/UpdateRoom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/customer",
        element: <Customer/>
    },
    {
        path: "/createCustomer",
        element: <CreateCustomer/>
    },
    {
        path: "/updateCustomer",
        element: <UpdateCustomer/>
    },
    {
        path: "/contract",
        element: <Contract/>
    },
    {
        path: "/createContract",
        element: <CreateContract/>
    },
    {
        path: "/createService",
        element: <CreateService/>
    },
    {
        path: "/updateService",
        element: <UpdateService/>
    },
    {
        path: "/createHouse",
        element: <CreateHouse/>
    },
    {
        path: "/createRoom",
        element: <CreateRoom/>
    },
    {
        path: "/updateHouse",
        element: <UpdateHouse/>
    },
    {
        path: "/updateRoom",
        element: <UpdateRoom/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    // {
    //     path: "/updateRoom",
    //     element: <UpdateRoom/>
    // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} >
    <App />
      </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
