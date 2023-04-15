import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Login, Home, Dashboard, Navbar, Signup, Footer} from './components'
import ForgotPassword from "./components/ForgotPassword";


const App = () => {
  return (
        <BrowserRouter>
              <Navbar />
          <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/" element={<Home />}>
          
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App