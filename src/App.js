import "./app.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/main-pages/Home";
import ViewAllProducts from "./components/main-pages/ViewAllProducts";
import HeadBandsOnly from "./components/main-pages/HeadBandsOnly";
import BachelorettePage from "./components/main-pages/BachelorettePage";
import ViewCart from "./components/checkout/ViewCart";
import AddressForm from "./components/checkout/AddressForm";
import ReviewOrder from "./components/checkout/ReviewOrder";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="body">
        <br />
        <Header />
        <br />
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ViewAllProducts" component={ViewAllProducts} />
          <Route path="/HeadBandsOnly" component={HeadBandsOnly} />
          <Route path="/BachelorettePage" component={BachelorettePage} />
          <Route path="/BachelorettePage" component={BachelorettePage} />
          <Route path="/ViewCart" component={ViewCart} />
          <Route path="/AddressForm" component={AddressForm} />
          <Route path="/ReviewOrder" component={ReviewOrder} />
          <br />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
