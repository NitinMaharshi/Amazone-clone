import React from "react";
import "./home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12312320"
          title="Amazon Brand - Solimo Checkered Jar Container Set of 18, 1000 ml, 500 ml, 200 ml, Transparent, Plastic "
          price={472}
          rating={4}
          image="https://m.media-amazon.com/images/I/91IpehOCi2L._SL1500_.jpg"
        />
        <Product
          id="12312355"
          title="Amazon Brand - Solimo Plastic Storage Container Set (20 pieces, Wavy Pattern, Black) "
          price={599}
          rating={4}
          image="https://m.media-amazon.com/images/I/91wFbcYopAL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="31238204"
          title="(Renewed) Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) "
          price={31441.5}
          rating={4}
          image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY741_.jpg"
        />
        <Product
          id="12312580"
          title="Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Black/Carbon, One Size (S & L Bands Included) (Black/Carbon) "
          price={12999.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/610q610KVfL._SL1500_.jpg"
        />
        <Product
          id="31236893"
          title="2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Silver "
          price={239900.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Y30DpqRVL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="10312598"
          title="
          Samsung 108 cm (43 Inches) Wondertainment Series Full HD LED Smart TV UA43TE50AAKXXL (Titan Gray) (2020 model)"
          price={31990.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71nFNnKNt7L._SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
