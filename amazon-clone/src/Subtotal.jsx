import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import "./subtotal.css";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="subtotal ">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="text">
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
              </p>
              <small className="Subtotal__gift">
                <input type="checkbox" /> This order contains a gift.
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <button>Proceed to Checkout</button>
      </div>
    </>
  );
};

export default Subtotal;
