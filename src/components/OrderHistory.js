import styled from "styled-components";
import { useOrderContext } from "../context/order_context";
import React from "react";
import OrderHistoryItem from "./OrderHistoryItem";
const OrderHistory = () => {
    const {order} = useOrderContext();
    return(
        <Wrapper>
            <h1>Order History</h1>
            {order.length>0&&
              <div className="cart_heading grid grid-five-column">
                  <p>Quán Ăn</p>
                  <p>Đánh Giá</p>
              </div>
            }
            {order.length>0&&<hr />}
            <div className="cart-item">
                {order?.map((curElem) => {
                    return (
                      <React.Fragment>
                        <OrderHistoryItem key={curElem.id} {...curElem} />

                      </React.Fragment>
                    )
                })}
            </div>
            {order.length>0&&<hr />}
        </Wrapper>
    )
}
const Wrapper = styled.section`
    width:70%;
    margin-top: 5rem;
  padding: 9rem 10rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  border-radius: 25px;
  h1{
    font-size: 3rem;
    margin-top:-5rem;
    margin-bottom: 5rem;
  }
  p{
    font-size: 1.8rem;
    font-weight: 500;
  }
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
    grid-template-columns: repeat(2, 1fr);
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
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    img {
      max-width: 15rem;
      width: 15rem;
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


export default OrderHistory;