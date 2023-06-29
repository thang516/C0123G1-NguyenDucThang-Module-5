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
import Home from "./components/views/Home";
import {UpdateCustomer} from "./components/customer/UpdateCustomer";
import {Contract} from "./components/contract/Contract";
import {CreateContract} from "./components/contract/CreateContract";
import {CreateService} from "./components/services/CreateService";
import {UpdateService} from "./components/services/UpdateService";
import {CreateHouse} from "./components/services/CreateHouse";
import {CreateRoom} from "./components/services/CreateRoom";
import {UpdateHouse} from "./components/services/UpdateHouse";
import {UpdateRoom} from "./components/services/UpdateRoom";
import {Facility} from "./components/services/Facility";
import {CreateSer} from "./components/services/CreateSer";
import {UpdateSer} from "./components/services/UpdateSer";

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
        path: "/updateCustomer/:id",
        element: <UpdateCustomer/>
    },
    {
        path: "/update/:id",
        element: <UpdateSer/>
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
        path: "/home",
        element: <Home/>
    },
    {
        path: "/facility",
        element: <Facility/>
    },
    {
        path: "/createAllService",
        element: <CreateSer/>
    },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
