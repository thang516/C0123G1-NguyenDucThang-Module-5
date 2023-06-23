import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import React from "react";
import {Selector} from "./components/Selector";
import MyClock from "./components/MyClock";

function App() {
    return(
        <>
        <Counter/>
        <Selector/>
            <div className="Container">
                <MyClock/>
            </div>
        </>

    )
}
export default App;


