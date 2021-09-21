import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './features/Navbar'
import Home from './features/Home'
import Footer from './features/Footer'
import Detail from './features/Detail'
import Cart from './features/Cart'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/detail" exact component={() => <Detail />} />
          <Route path="/cart" exact component={() => <Cart />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
