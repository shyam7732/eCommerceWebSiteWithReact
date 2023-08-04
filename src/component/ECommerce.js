import React, { useContext, useEffect, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import axios from 'axios';
import "./Css/ecommerce.css";
import { ecommerceContext } from './Main';

function ECommerce() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(ecommerceContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/")
      .then((result) => {
        setProducts(result.data);
      });
  }, []);

  function trimDescription(desc) {
    return (
      desc.length > 100 ? desc.slice(0, 100) + "..." : desc
    );
  }

  function handleToCart(e, product) {
    const existsInCart = cart.some((item) => item.id === product.id);
    const existingItem = cart.find((item) => item.id === product.id);

    if (existsInCart) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else if (existingItem) {
      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item   // If the item already exists in the cart, increment its quantity
        );
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);  // If the item is not in the cart, add it with a quantity of 1
    }
  }

  return (
    <>
      <div className='product-container'>
        <h2>Products</h2>
        <div className='Products'>
          {products.map((product, index) => {
            const existsInCart = cart.some((item) => item.id === product.id);
            return (
              <div className="product" key={index}>
                <img src={product.image} alt={product.name} />
                <h3>
                  <NavLink to={`/product/${product.id}`}>
                    {product.title.length > 50
                      ? product.title.slice(0, 50) + "..."
                      : product.title}
                  </NavLink>
                </h3>
                <h3>Price: INR {Math.floor(product.price * 85)}</h3>
                <p className="description">
                  {trimDescription(product.description)}
                </p>
                {existsInCart ? (
                  <Link
                    className="addedToCart"
                    onClick={(e) => handleToCart(e, product)}
                  >
                    Exit from cart
                  </Link>
                ) : (
                  <Link
                    className="addToCart"
                    onClick={(e) => handleToCart(e, product)}
                  >
                    Add to cart
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ECommerce;
