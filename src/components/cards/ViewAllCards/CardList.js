import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCards from "./ItemCards";
import { useLocation } from "react-router-dom";

const CardList = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const location = useLocation();

  useEffect(
    () =>
      axios.get("/api/items").then((res) => {
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
          addToCart={props.addToCart}
        />
      ))}
    </div>
  );
};

export default CardList;

// import "./ItemCards.css";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// // import CartQty from "./CartQty";

// const CardList = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [hoover, setHoover] = useState(false);

//   useEffect(
//     () =>
//       axios.get("/api/items").then((res) => {
//         setAllProducts(res.data);
//       }),
//     []
//   );

//   // console.log(cart);

//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//       {allProducts.map((obj) => (
//         <div
//           className="itemSec"
//           onMouseEnter={() => {
//             setHoover(true);
//           }}
//           onMouseLeave={() => {
//             setHoover(false);
//           }}
//         >
//           <Link
//             className="productLink"
//             to={{
//               pathname: `/item/${obj.item_department}/${obj.item_name}`,
//               state: {
//                 sku: obj.item_sku,
//                 name: obj.item_name,
//                 print: obj.item_print,
//                 color: obj.item_color,
//                 category: obj.item_category,
//                 department: obj.item_department,
//                 size: obj.item_size,
//                 description: obj.item_description,
//                 price: obj.item_price,
//                 image: obj.item_image,
//               },
//             }}
//           >
//             <div className="products">
//               <div className="itemCards" key={obj.item_id}>
//                 <img
//                   className="imgProduct"
//                   src={`${obj.item_image}`}
//                   alt={obj.item_name}
//                 />
//                 <h3 className="itemName">{obj.item_name}</h3>
//                 <p className="description" style={{ width: "15em" }}>
//                   Description: {obj.item_description}
//                 </p>

//                 <h5 className="price">${obj.item_price}</h5>
//               </div>
//             </div>
//           </Link>
//           {hoover ? (
//             <span>
//               <input
//                 className="mouseOverBtn"
//                 type="button"
//                 value="Add to cart"
//               />
//             </span>
//           ) : null}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;
