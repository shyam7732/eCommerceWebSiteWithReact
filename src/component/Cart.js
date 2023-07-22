import React, { useState, useContext } from 'react'
import { ecommerceContext } from './Main'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Css/cart.css"

function Cart() {

  const{cart, setCart} = useContext(ecommerceContext)
  // const [quantity, setQuantity] = useState(1); 


  function deleteToCart(e, index){
    e.preventDefault()
    setCart(cart.filter((task, id) =>{
      return id !== index
    }))

    // setCart(cart.filter(cartItem => cartItem.id !== index.id))
  }

  // function handleIncrease(e, index) {
  //   setQuantity(quantity + 1);
  //   // setQuantity(quantity.filter((task, id) => {
  //   //   return quantity + 1
  //   // }))
  // }

  // function handleDecrease() {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // }

  return (
    <>
      <section className='cart'>
        <h2>Cart</h2>
        <div className='cart-list'>

          {
            cart.map((item, index) => {
              return(
                <div className='cart-item' key={item.id}>
                  <div className='left'>
                    <img src={item.image}/>
                  </div>
                  <div className='right'>
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}</p>
                  </div>
                  <Link className='deletToCart' onClick={(e) => deleteToCart(e, index)}><DeleteIcon/></Link>

                  {/* <label>
                    Quantity:
                    <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                  </label>
                  <button onClick={handleDecrease}> - </button>
                  <button onClick={(e) => handleIncrease(e, index)}> + </button> */}
                </div>
              )
            })
          }

        </div>
      </section>
    </>
  )
}

export default Cart
