import React from 'react';
import './css/App.css';
import Header from "./components/header";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/home"
import Contact from "./components/contact"
import About from "./components/about"
import Navbar from "./components/navbar"
import Test from "./components/test"

function App() {
  return (
    <div>
      <Header/>
        <div className="content">
        <BrowserRouter>
          <Navbar/>
            <Route path="/home" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Contact" component={Contact}/>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
