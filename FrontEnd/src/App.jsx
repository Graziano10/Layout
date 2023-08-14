import React from "react"
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Section01 from "./pages/Section01";
import Section02 from "./pages/Section02";
import Section03 from "./pages/Section03";
import Section04 from "./pages/Section04";

const App = () => {


  return (
    <>

      <nav className="hidden">
        <Link to='/'>Home</Link>
        <Link to='/Section01'>Section01</Link>
        <Link to='/Section02'>Section02</Link>
        <Link to='/Section03'>Section03</Link>
        <Link to='/Section04'>Section04</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/section01" element={<Section01/>}/>
        <Route path="/section02" element={<Section02/>}/>
        <Route path="/section03" element={<Section03/>}/>
        <Route path="/section04" element={<Section04/>}/>
      </Routes>
    </>
  )
}

export default App;
