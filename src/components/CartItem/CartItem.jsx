import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, quantity, price, img }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="CartItem">
      <img src={img} alt={name} className="CartItemImg" />
      <div className="CartItemInfo">
        <h4>{name}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio unitario: ${price}</p>
        <p>Total: ${quantity * price}</p>
      </div>
      <button onClick={() => removeFromCart(id)} className="RemoveButton">
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
