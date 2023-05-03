import React, { useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { NavLink } from "react-router-dom";

const OrderHistoryItem = ({ id, name, image, price, amount }) => {
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

      <div>
        <NavLink to="/review">
            <p style={{color:"Green",
            fontStyle:"italic",
        }}>Viết Đánh Giá</p>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
