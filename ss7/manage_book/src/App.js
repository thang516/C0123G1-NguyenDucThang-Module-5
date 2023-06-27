import logo from './logo.svg';
import './App.css';
import {Book} from "./component/Book";
import React from "react";
import {Routes ,Route} from "react-router-dom"
import {BookCreate} from "./component/BookCreate";
import Toast from "bootstrap/js/src/toast";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {BookUpdate} from "./component/BookUpdate";
function App() {
  return (
  <>
  <Routes>
  <Route path='/'  element={<Book/>} />
  <Route path='/create'  element={<BookCreate/>} />
  <Route path='/update/:id'  element={<BookUpdate/>} />
  </Routes>

  {/*<Book/>*/}
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
