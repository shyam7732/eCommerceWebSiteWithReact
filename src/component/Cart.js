import React, { useContext } from "react";
import { ecommerceContext } from "./Main";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Css/cart.css";

function Cart() {
  const { cart, setCart } = useContext(ecommerceContext);

  function deleteToCart(e, index) {
    setCart(cart.filter((item, id) => id !== index));
  }

  function incrementQuantity(index) {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity += 1;
      return newCart;
    });
  }

  function decrementQuantity(index) {
    setCart((prevCart) => {
      const newCart = [...prevCart];

      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      }

      return newCart;
    });
  }

  function getTotalPrice() {
    return cart.reduce(
      (total, item) => total + Math.floor(item.price * 85) * item.quantity,
      0
    );
  }
  return (
    <>
      <section className="cart">
        <h2>Cart</h2>
        <div className="cart-list">
          {cart.map((item, index) => {
            return (
              <div className="cart-item" key={item.id}>
                <div className="left">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="center">
                  <h3>{item.title}</h3>
                  <p>Price: INR {Math.floor(item.price * 85)}</p>
                  <Link
                    className="deletToCart"
                    onClick={(e) => deleteToCart(e, index)}
                  >
                    <DeleteIcon />
                  </Link>
                  <div className="quantity-control">
                    <button onClick={() => decrementQuantity(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(index)}>+</button>
                  </div>
                </div>

                <div className="right">
                  <h3>
                    Total: INR {Math.floor(item.price * 85) * item.quantity}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-total">
          <h3>Cart Total: INR {getTotalPrice()}</h3>
        </div>
      </section>
    </>
  );
}

export default Cart;
