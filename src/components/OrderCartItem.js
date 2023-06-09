import React, { useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const OrderCartItem = ({ id, name, image, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price + 20000} />
        </p>
      </div>
      <div>
        <p>
          {amount}
        </p>
      </div>

      <div>
       <p style={{color:"#E4A11B"}}>Đang Giao</p>
      </div>
    </div>
  );
};

export default OrderCartItem;
