import React from 'react';
import './css/App.css';
import Header from "./components/header";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/storeFront";
import Contact from "./components/contact";
import About from "./components/about";
import Navbar from "./components/navbar";
import ItemViewer from "./components/ItemViewer";

function App() {
  return (
    <div>
      <Header/>
        <div >
        <BrowserRouter>
          <Navbar/>
          <div className="content">
            <Route path="/storeFront" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/ItemViewer" component={ItemViewer}/>
            </div>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
