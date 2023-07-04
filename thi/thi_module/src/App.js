import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import {ProductList} from "./component/ProductList";
import {CreateProduct} from "./component/CreateProduct";




function App() {
    return (
        <>

            <Routes>
                <Route path='/' element={<ProductList/>} />
                <Route path='/create' element={<CreateProduct/>} />
            </Routes>

        </>
    );
}

export default App;
