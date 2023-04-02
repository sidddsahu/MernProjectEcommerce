import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <div className="d-flex align-items-centre mt-1 ms-1">
        <p  onClick={() => deleteCartItems(item.product)}>Remove</p>
        <i class="ri-delete-bin-6-fill"></i>
        </div>
       
      </div>
    </div>
  );
};

export default CartItemCard;
