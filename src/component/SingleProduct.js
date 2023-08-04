import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ecommerceContext } from "./Main";
import "./Css/singleProduct.css"

function SingleProduct() {
  const { id } = useParams();
  const { cart, setCart } = useContext(ecommerceContext);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://fakestoreapi.com/products/" + id);
      console.log(result.data);
      setSingleProduct(result.data);
    }

    fetchData();
  }, []);

  function handleToCart(e, product) {
    const existsInCart = cart.some((item) => item.id === product.id);
    const existingItem = cart.find((item) => item.id === product.id);

    if (existsInCart) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else if (existingItem) {
      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  }

  const existsInCart = cart.some((item) => item.id === singleProduct.id);

  return (
    <>
      <div className="single-product">
        <div className="left">
          <img src={singleProduct.image} alt={singleProduct.id}></img>
        </div>
        <div className="right">
          <h2>{singleProduct.title}</h2>
          <p className="category">{singleProduct.category}</p>
          <p className="price">INR {Math.round(singleProduct.price * 85)}</p>
          <p className="desc">{singleProduct.description}</p>
          {existsInCart ? (
            <Link
              className="addedToCart"
              onClick={(e) => handleToCart(e, singleProduct)}
            >
              Exit from cart
            </Link>
          ) : (
            <Link
              className="addToCart"
              onClick={(e) => handleToCart(e, singleProduct)}
            >
              Add to cart
            </Link>
          )}
        </div>
      </div>
    </>
  );
}


export default SingleProduct;
