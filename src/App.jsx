import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "./components/header";

// Screens
import Home from "./screens/HomeScreen/index";
import About from "./screens/AboutScreen/index";
import Contact from "./screens/ContactScreen/index";
import Login from "./screens/LoginScreen/index";
import Shop from "./screens/ShopScreen/index";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={Login} />
        <Route path="/shop" component={Shop} />
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
