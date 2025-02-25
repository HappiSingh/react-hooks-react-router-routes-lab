import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Actors from "./Actors";
import Directors from "../pages/Directors";
import Movies from "./Movies";

function App() {
  return (
    <div className="navbar">
      <NavBar />
      <Switch>
         <Route exact path="/movies"> 
              <Movies />
         </Route>
         <Route exact path="/directors">
              <Directors />
         </Route>  
         <Route exact path="/actors">  
             <Actors />
         </Route> 
         <Route  path="/"> 
            <Home />
         </Route> 
      </Switch>   
    </div>
  )
}

export default App;