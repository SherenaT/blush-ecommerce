import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCards from "./HeadbandsItemCards";

const HeadbandsCardList = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(
    () =>
      axios.get("/api/headbands").then((res) => {
        setAllProducts(res.data);
      }),
    []
  );
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {allProducts.map((obj) => (
        <ItemCards
          key={obj.item_id}
          sku={obj.item_id}
          name={obj.item_name}
          print={obj.item_print}
          color={obj.item_color}
          category={obj.item_category}
          department={obj.item_department}
          size={obj.item_size}
          description={obj.item_description}
          price={obj.item_price}
          image={obj.item_pathway}
        />
      ))}
    </div>
  );
};

export default HeadbandsCardList;
