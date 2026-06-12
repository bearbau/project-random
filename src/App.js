/*
  just a quick react study i did! 
  react calculator from Tyler Potts (youtube)
*/
import { useState } from "react";
import Navbar from './Navbar'; 
import About from ".pages/About";
import Projects from ".pages/Projects";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = App
      break
    case "/about":
      Component = About
      break
    case "/projects":
      Component = Projects
      break
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  )
}

export default App;
