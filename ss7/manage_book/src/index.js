import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider

} from "react-router-dom";
import {Book} from "./component/Book";
import {BookCreate} from "./component/BookCreate";
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Book/>
//     },
//     {
//         path: "/create",
//         element: <BookCreate/>
//     },
// ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/*<RouterProvider router={router} />*/}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
