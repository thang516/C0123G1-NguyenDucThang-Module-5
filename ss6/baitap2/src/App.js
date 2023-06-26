import logo from './logo.svg';
import './App.css';
import {HealthDeclaration} from "./components/HealthDeclaration";
import React from "react";
import {ToastContainer} from "react-toastify";
function App() {
  return (
   <>
   <HealthDeclaration/>
       <ToastContainer
           position="top-center"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"
       />
   </>
  );
}

export default App;
