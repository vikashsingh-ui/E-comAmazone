import React from "react";
import "./Subtotal.css";
// import CurrencyFormatter from "react-currency-formatter";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="subtotal">
        {/* <CurrencyFormatter
          className="currencyformater"
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" />
                This order contain a gift
              </small>
            </>
          )}
          decimalScale={2}
          // value={getBasketTotal(basket)}
          displaytype={"text"}
          thousandSeparator={true}
          prefix={"$"}
        /> */}

        <p>
          Subtotal ({basket.length} items):{"$"}
          <strong>{`${getBasketTotal(basket)}`}</strong>{" "}
        </p>
        <small className="subtotal_gift">
          <input type="checkbox" />
          This order contain a gift
        </small>
        <button>Proceed to checkout</button>
      </div>
    </>
  );
};

export default Subtotal;
