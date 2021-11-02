import React, { useState, useEffect } from "react";
import axios from "axios";

const CartQty = (props) => {
  const {
    sku,
    name,
    print,
    color,
    category,
    department,
    size,
    description,
    price,
    image,
  } = props;
  const PAGE_PRODUCT = "props";
  const PAGE_CART = "cart";

  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCT);

  useEffect(
    () =>
      axios.get("/api/items").then((res) => {
        setAllProducts(res.data);
      }),
    []
  );

  const addToCart = (props) => {
    console.log("add To Cart");
    setCart([...cart, { ...props }]);
  };

  const removeFromCart = (productsToRemove) => {
    setCart(cart.filter((props) => props !== productsToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderedProducts = () => (
    <>
      <h1>Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {allProducts.map((props, sku) => (
          <div
            key={sku}
            style={{
              display: "flex",
              border: "2px solid black",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "3em",
            }}
          >
            <p className="itemName">{props.item_name}</p>
            <p className="description" style={{ width: "15em" }}>
              {props.item_description}
            </p>
            <h5 className="price">${props.item_price}</h5>
            <button onClick={() => addToCart(props)}>add to cart</button>
          </div>
        ))}
        ;
      </div>
    </>
  );
  const renderedCarts = () => (
    <>
      <h1>Cart</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {cart.map((props, sku) => (
          <div
            key={sku}
            style={{
              display: "flex",
              border: "2px solid black",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "3em",
            }}
          >
            <p className="itemName">{props.item_name}</p>
            <p className="description" style={{ width: "15em" }}>
              {props.item_description}
            </p>
            <h5 className="price">${props.item_price}</h5>
            <button onClick={() => removeFromCart(props)}>Remove</button>
          </div>
        ))}
        ;
      </div>
    </>
  );

  return (
    <div style={{ margin: "15% 0" }}>
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          view cart ({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCT)}>view products</button>
      </header>
      {page === PAGE_PRODUCT && renderedProducts()}
      {page === PAGE_CART && renderedCarts()}
    </div>
  );
};

export default CartQty;
