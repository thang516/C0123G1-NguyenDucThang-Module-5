import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import React from "react";
import {Services} from "./components/Services";

function App() {
    return (
        <>
            <Header/>
            <Services/>
            <Footer/>

        </>
    );
}

export default App;
