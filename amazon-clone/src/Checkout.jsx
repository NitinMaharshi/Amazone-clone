import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Mar22/Rs1Deal/08_to_14_HUB_PC.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Amazon Cart is empty.</h2>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Cart</h2>
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
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
