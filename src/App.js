import "./app.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import ViewAllProducts from "./components/main-pages/ViewAllProducts";
import HeadBandsOnly from "./components/main-pages/HeadBandsOnly";
import BachelorettePage from "./components/main-pages/BachelorettePage";
import ViewCart from "./components/checkout/ViewCart";
import AddressForm from "./components/checkout/AddressForm";
import ReviewOrder from "./components/checkout/ReviewOrder";
import DetailPage from "./components/cards/DetailPage/DetailPage";
import CartQty from "./components/cards/ViewAllCards/CartQty";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="body">
        <br />
        <Header />
        <br />
        <Switch>
          <Route path="/" exact component={Home} exact />
          <Route path="/ViewAllProducts" component={ViewAllProducts} exact />
          <Route path="/HeadBandsOnly" component={HeadBandsOnly} exact />
          <Route path="/BachelorettePage" component={BachelorettePage} exact />
          <Route path="/BachelorettePage" component={BachelorettePage} exact />
          <Route path="/ViewCart" component={ViewCart} exact />
          <Route path="/AddressForm" component={AddressForm} exact />
          <Route path="/ReviewOrder" component={ReviewOrder} exact />
          <Route path="/item/:department/:name" component={DetailPage} exact />
          <Route path="/CartQty" component={CartQty} exact />

          <br />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
