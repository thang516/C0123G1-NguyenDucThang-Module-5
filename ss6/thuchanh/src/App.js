import logo from './logo.svg';
import './App.css';
// import React, {useState} from "react";
// import {Routes ,Route,Link} from "react-router-dom"
import {About} from "./components/About"
import {Home} from "./components/Home"
import {Contract} from "./components/Contract"
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Product from "./components/Product";
export default   function App() {
  return(
      <>

              <Routes>
                  <Route path="/" element={<Category />} />
                  <Route path="/product/:categoryId" element={<Product />} />
              </Routes>
        {/*<div>*/}
        {/*  <ul>*/}
        {/*    <li>*/}
        {/*      <Link to="/">Home</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link to="/about">About</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link to="/contact">Contact</Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}

        {/*</div>*/}
        {/*<div>*/}
        {/*  //..*/}
        {/*  <hr />*/}
        {/*  <Routes>*/}
        {/*    <Route path="/" element={<Home />} />*/}
        {/*    <Route path="/about" element={<About />} />*/}
        {/*    <Route path="/contact" element={<Contract />} />*/}
        {/*  </Routes>*/}
        {/*</div>*/}
      </>
  // const MESSAGE_ERROR = {
  //   username: "Username error",
  //   email: "Email error",
  //   password: "Password error",
  //   confirmPassword: "Password must be the same"
  // };
  //
  // const REGEX = {
  //   username: /^[a-zA-Z]{2,}$/,
  //   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  //   password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  // };
  //
  // const [form,setForm] = useState({
  //
  //   confirmPassword: undefined
  // });
  //
  // function handleChange(event) {
  //   let error = "";
  //   if (event.target.name === "password") {
  //     if (form.confirmPassword && form.confirmPassword.value) {
  //       error =
  //           event.target.value === form.confirmPassword.value
  //               ? ""
  //               : MESSAGE_ERROR[event.target.name];
  //     } else {
  //       error = REGEX[event.target.name].test(event.target.value)
  //           ? ""
  //           : MESSAGE_ERROR[event.target.name];
  //     }
  //   } else if (event.target.name === "confirmPassword") {
  //     error =
  //         event.target.value === form.password.value
  //             ? ""
  //             : MESSAGE_ERROR[event.target.name];
  //   } else {
  //     error = REGEX[event.target.name].test(event.target.value)
  //         ? ""
  //         : MESSAGE_ERROR[event.target.name];
  //   }
  //   setForm({
  //     ...form,
  //     [event.target.name]: event.target.value
  //   });
  // }
  //
  // function handleSubmit() {
  //   const isFilled =
  //       form.username &&
  //       form.username.value &&
  //       form.email &&
  //       form.email.value &&
  //       form.password &&
  //       form.password.value &&
  //       form.confirmPassword &&
  //       form.confirmPassword.value;
  //   const isError =
  //       isFilled &&
  //       (form.username.error ||
  //           form.email.error ||
  //           form.password.error ||
  //           form.confirmPassword.error);
  //
  //   alert(
  //       isFilled && !isError
  //           ? "Sign up successfully!!!"
  //           : "Please fill out all the fields!!!")
  // }
  //
  // return (
  //     <div>
  //       <h1>Sign up</h1>
  //       <form>
  //         <div
  //             className={`custom-input ${form.username &&
  //             form.username.error &&
  //             "custom-input-error"}`}
  //         >
  //           <label>Username </label>
  //           <input
  //               name="username"
  //               value={(form.username && form.username) || ""}
  //               onChange={handleChange}
  //           />
  //           {form.username && form.username.error && (
  //               <p className="error">{form.username.error}</p>
  //           )}
  //         </div>
  //         <div
  //             className={`custom-input ${form.email &&
  //             form.email.error &&
  //             "custom-input-error"}`}
  //         >
  //           <label>Email </label>
  //           <input
  //               name="email"
  //               value={(form.email && form.email) || ""}
  //               onChange={handleChange}
  //           />
  //           {form.email && form.email.error && (
  //               <p className="error">{form.email.error}</p>
  //           )}
  //         </div>
  //         <div
  //             className={`custom-input ${form.password &&
  //             form.password.error &&
  //             "custom-input-error"}`}
  //         >
  //           <label>Password </label>
  //           <input
  //               type="password"
  //               name="password"
  //               value={(form.password && form.password) || ""}
  //               onChange={handleChange}
  //           />
  //           {form.password && form.password.error && (
  //               <p className="error">{form.password.error}</p>
  //           )}
  //         </div>
  //         <div
  //             className={`custom-input ${form.confirmPassword &&
  //             form.confirmPassword.error &&
  //             "custom-input-error"}`}
  //         >
  //           <label>Confirm password </label>
  //           <input
  //               type="password"
  //               name="confirmPassword"
  //               value={(form.confirmPassword && form.confirmPassword) || ""}
  //               onChange={handleChange}
  //           />
  //           {form.confirmPassword && form.confirmPassword.error && (
  //               <p className="error">{form.confirmPassword.error}</p>
  //           )}
  //         </div>
  //         <button type="button" onClick={handleSubmit}>
  //           Submit
  //         </button>
  //       </form>
  //     </div>
  );
}

// export default App;
