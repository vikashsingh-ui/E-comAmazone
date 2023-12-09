import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/PD-july/PCPD21-ILM-640x50._CB664762655_.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">Shopping Basket</h2>
              {/* cart items  */}
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>

        {basket?.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
