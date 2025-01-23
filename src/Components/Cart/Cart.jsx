import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "Нет добавленных пунктов" : ""}
      <Button
        disable={cartItems.length === 0 ? true : false}
      />
    </div>
  );
}

export default Cart;
