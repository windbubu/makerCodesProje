import React from "react";

import { BrowserRouter , Link, Switch, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

const App = () => {
  return (
    <div className="container">
    <BrowserRouter>
    <Navbar />
      
        <Switch>
        
        
        <Route path="/BecomeVeggie" component={LogIn}/>
        <Route path="/SignUp" component={SignUp}/>
        </Switch>
      
    </BrowserRouter>
    </div>
  );
};

export default App;
