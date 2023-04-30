import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import FormatPrice from "./Helpers/FormatPrice";
import { useState } from "react";

const Cart = () => {
  const { cart, clearCart, shipping_fee } = useCartContext();
  const [isCheckout, setIsCheckout] = useState(false);

  // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
  let total_price = 0;

  cart.forEach((item) => {
    total_price += item.price * item.amount;
  });

  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>Empty Cart</h3>
      </EmptyDiv>
    );
  }

  const clickHandler = () => {
    setIsCheckout(true);
  };

  return (
    <Wrapper>
      <div className="container">
        <h1>Cart</h1>
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/">
              <Button> Continue Shopping </Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={clearCart}>
            Clear cart
          </Button>
        </div>
          
        <div className="checkout_btn">
          <Button onClick={clickHandler}> Checkout </Button>
        </div>
          {/* checkout modal */}
          {isCheckout && (
            <div className="checkout-modal">
              <div className="checkout-modal--content">
                <div className="checkout-modal--close">
                  <button onClick={() => setIsCheckout(false)}>X</button>
                </div>
                <div className="checkout-modal--items">
                  <h3>Checkout</h3>
                  <div className="checkout-modal--items--data">
                    <div className="cart_heading grid grid-five-column">
                      <p>Item</p>
                      <p className="cart-hide">Price</p>
                      <p>Quantity</p>
                      <p className="cart-hide">Subtotal</p>
                      <p>Remove</p>
                    </div>
                    <hr />
                    <div className="cart-item">
                      {cart.map((curElem) => {
                        return <CartItem key={curElem.id} {...curElem} />;
                      })}
                    </div>
                    <hr />
                    <div className="modal_footer"> 
                      <form className="checkout-modal--items--data--form">
                        <div >
                          <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Full Name..." />
                          </div>
                          <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Email..." />
                          </div>
                          <div>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" placeholder="Address..."/>
                          </div>
                          <div>
                            <label htmlFor="city">Phone</label>
                            <input type="phone" id="phone" placeholder="Phone No..." />
                          </div>
                        </div>
                      </form>
                      
                      <div className="modal_center">
                        <h3>Payment</h3>
                        <form>
                          <input type="radio" id="COD" name="payment" value="COD" />
                          <label for="COD">Trả tiền khi nhận hàng</label><br />
                          <input type="radio" id="CARD" name="payment" value="CARD" />
                          <label for="CARD">Chuyển Khoản</label><br />
                        </form>
                      </div>
                      <div className="footer_right">
                        <div className="order-total--amount">
                            <div className="order-total--subdata">
                              <div>
                                <p>subtotal:</p>
                                <p>
                                  <FormatPrice price={total_price} />
                                </p>
                              </div>
                              <div>
                                <p>shipping fee:</p>
                                <p>
                                  <FormatPrice price={shipping_fee} />
                                </p>
                              </div>
                              <hr />
                              <div>
                                <p>order total:</p>
                                <p>
                                  <FormatPrice price={shipping_fee + total_price} />
                                </p>
                              </div>
                            </div>
                            <NavLink to="/status">
                                <Button className="ord_btn">Đặt hàng</Button> 
                            </NavLink>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;
  .ord_btn{
    margin-top: 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
      background-color: #f0c040;
      color: #fff;
    }
  }
  .modal_footer{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
  .modal_center{
    grid-column: 2/3;
    margin-top: 2rem;
    input{
      margin-right: 1rem;      
    } 
    label{
      font-size: 1.8rem;
    }   
    h3{
      font-size: 2.4rem !important;
      font-style: italic;
    }
    form{
      input{
        margin-top: 1rem;
      }
    }

  }
  .checkout-modal--items--data--form{
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    margin-top: 2rem;
    div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      label{
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 1rem;
        font-style: italic;
      }
      
      input{
        width: 300px;
        height: 2rem;
        border: 1px solid #000;
        border-radius: 0.5rem;
        padding: 2rem 1rem;
        font-size: 1.8rem;
        font-weight: 500;
      }
      input::placeholder{
        font-size: 1.8rem;
        font-weight: 500;
      }
    }
  }
  .footer_right{

  }
  .checkout-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: grid;
    place-items: center;
    
    z-index: 1000;
    .checkout-modal--content{
      overflow-y: scroll;

      width: 80%;
      height: 80%;
      padding: 8rem;
      background: #fff;
      border-radius: 1rem;


      position: relative;
      .checkout-modal--close{
        position: absolute;
        top: 20px;
        right: 20px;
        button{
          background: transparent;
          border: none;
          font-size: 3rem;
          font-weight: 700;
          color: #000;
          cursor: pointer;
        }
      }
    }
    .checkout-modal--items{
      height: 100%;
      width: 100%;
      
      h3{
        font-size: 3.2rem;
        text-transform: capitalize;
        font-weight: 300;
        margin-bottom: 2rem;
      }
    }
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 10rem;
      height: 10rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }
  .checkout_btn{
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
  }
  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
