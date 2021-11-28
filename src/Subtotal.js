import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router";

function Subtotal(props) {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  /*
    let sub = 0
    for (let i = 0; i < basket.length; i++) {
        sub = sub + basket[i].price
    }
    */

  return (
    <div className={"subtotal"}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              {/*<strong> ${sub}</strong>*/}
              <strong>{value}</strong>
            </p>
            <small className={"subtotal__gift"}>
              <input type={"checkbox"} /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* Interesting thing to note is if I key in navigate("payment") it redirects to ".../checkout/payment". But in this case if i put "/payment" it redirects to "".../payment" */}
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
