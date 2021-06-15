import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./screens/HomeScreen/index.jsx";
import About from "./screens/AboutScreen/index.jsx";
import Contact from "./screens/ContactScreen/index.jsx";
import Login from "./screens/LoginScreen/index.jsx";
import Shop from "./screens/ShopScreen/index.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={Login} />
        <Route path="/shop" component={Shop} />
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default App;
